# College Ranking System

This project implements a college ranking system where colleges are filtered based on user preferences such as location and maximum fees. The filtered colleges are ranked according to a weighted scoring system that considers both ranking and fees.

## Functionality Overview

The project contains the following key components:

### 1. **Data Structure**
An array of college objects is defined, where each object contains the following properties:
- **`name`**: The name of the college.
- **`location`**: The location of the college (e.g., New York, California).
- **`fees`**: The annual fees of the college.
- **`ranking`**: The ranking of the college (lower ranking is better).

### 2. **Functions**
#### `calculateScore(college, maxFees, rankingWeight, feesWeight)`
This function calculates a score for each college based on the following criteria:
- **Ranking**: Multiplied by a user-defined ranking weight.
- **Fees**: Scaled against the maximum fees and multiplied by a user-defined fees weight.

```javascript
function calculateScore(college, maxFees, rankingWeight, feesWeight) {
    return (college.ranking * rankingWeight) + (college.fees / maxFees * feesWeight);
}