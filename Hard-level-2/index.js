
const colleges = [
    { name: "College A", location: "New York", fees: 20000, ranking: 1 },
    { name: "College B", location: "California", fees: 15000, ranking: 2 },
    { name: "College C", location: "New York", fees: 25000, ranking: 3 },
    { name: "College D", location: "New York", fees: 10000, ranking: 4 }
];

function calculateScore(college, maxFees, rankingWeight, feesWeight) {

    return (college.ranking * rankingWeight) + (college.fees / maxFees * feesWeight);

}

function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {
    let filteredColleges = colleges.filter(collage => collage.location === preferredLocation && collage.fees <= maxFees)


    let scoredColleges = filteredColleges.map(college => {
        const score = calculateScore(college, maxFees, rankingWeight, feesWeight);
        return { ...college, score: score.toFixed(2) };

    })

    scoredColleges.sort((a, b) => a.score - b.score);

    return scoredColleges;

}

let preferredLocation = "New York";
let maxFees = 20000;
let rankingWeight = 2;
let feesWeight = 1;

let result = rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);
result.forEach(college => {
    console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score}`);
});

