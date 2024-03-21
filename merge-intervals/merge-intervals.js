// n log(n)
function mergeIntervals(intervals) {
    intervals = intervals.sort((a,b) => {
        if(a[0] > b[0])
            return 1;
        else if(b[0] > a[0])
            return -1;
        else if(a[0] == b[0] && a[1] > b[1])
            return 1;
        else if(a[0] == b[0] && b[1] > a[1])
            return -1;
        else
            return 0;        
    });

    let merged = [];
    let i = 1;
    let max=intervals.length ? intervals[0][1] : -1;
    let min=intervals.length ? intervals[0][0] : -1;

    
    while(i < intervals.length){
        if(intervals[i][0] <= max && intervals[i][0] >= min || intervals[i][1] <= max && intervals[i][1] >= min
                || (intervals[i][0] <= min && intervals[i][1] >= max) ){
            max = Math.max(intervals[i][1], max);
            min = Math.min(intervals[i][0], min);
        }else{
            merged.push([min, max]);  
            max = intervals[i][1]
            min = intervals[i][0];            
        }        
        i = i +1;
    }
    if(intervals.length)
        merged.push([min, max]);
    return merged;
};


// N ^ 2
function mergeIntervals(intervals){
    function existsMerged(intervals){
        for(let i = 0; i < intervals.length; ++i){
            for(let j = i+1; j < intervals.length; ++j){
                if(intervals[i][0] <= intervals[j][1] && intervals[i][0] >= intervals[j][0] || intervals[i][1] <= intervals[j][1] && intervals[i][1] >= intervals[j][0] || (intervals[i][0] <= intervals[j][0] && intervals[i][1] >= intervals[j][1]) ) {
                    return {collision:true,i,j,tuple:[Math.min(intervals[i][0], intervals[j][0]), Math.max(intervals[i][1], intervals[j][1])]}
                }
            }
        }
        return {collision:false};
    }


    while(true){
        const { collision, i, j, tuple } = existsMerged(intervals);        
        if(!collision)
            break;
        intervals.splice(j, 1);
        intervals.splice(i, 1);
        intervals.push(tuple);       
    }

    return intervals;
}

//console.log( mergeIntervals([[2,3],[4,5],[6,7],[8,9],[1,10], [1,1], [0,0],[20,30], [15,30],[4,8],[2,9],[0,1]]) )
//console.log( mergeIntervals([[2,3],[4,5],[6,7],[8,9],[1,10]]) )
console.log( mergeIntervals([[1,4],[0,5]]) )
console.log( mergeIntervals([[1,3],[2,6],[8,10],[15,18]]) )
console.log( mergeIntervals([[1,9],[4,8],[0,1]]) )
console.log( mergeIntervals([[7,9],[4,8],[10,15],[1,10]]) )