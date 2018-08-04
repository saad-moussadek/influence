import React from "react";

let applyGeneralMetaDataFunctions = function(data) {
    setGrowthDerivatives(data, "like_count");
    setGrowthDerivatives(data, "comments_count");
    setGrowthDerivatives(data, "followers_count");
};

let setGrowthDerivatives = function (data, field) {
    let saveField = field + "_growthDerivative";
    let growthDerivatives = Array(data.length);
    growthDerivatives[0] = data[0];
    // growthDerivatives[0][field] = 0;
    for (let i = data.length - 1; i > 0; i--) {
        let previousGrowth = data[i - 1][field];
        let lastGrowth = data[i][field];
        let growthDerivative = (-1000 + Math.round(1000 * (lastGrowth / previousGrowth))) / 10;
        growthDerivatives[i] = data[i];
        growthDerivatives[i][saveField] = growthDerivative;
        if (previousGrowth === 0) {
            growthDerivatives[i][saveField] = null;
        }
    }
    return growthDerivatives;
};

export default applyGeneralMetaDataFunctions;