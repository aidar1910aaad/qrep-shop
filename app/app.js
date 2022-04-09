    const defaultComparator = (a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
    const quickSort = (
        arr,
        comparator = defaultComparator) => {

        const sortedArray = [ ...arr ];

        const recursiveSort = (start, end) => {

            if (end - start < 1) {
                return;
            }

            const pivotValue = sortedArray[end];
            let splitIndex = start;
            for (let i = start; i < end; i++) {
                const sort = comparator(sortedArray[i], pivotValue);

                if (sort === -1) {

                    if (splitIndex !== i) {
                        const temp = sortedArray[splitIndex];
                        sortedArray[splitIndex] = sortedArray[i];
                        sortedArray[i] = temp;
                    }
                    splitIndex++;
                }

            }

            sortedArray[end] = sortedArray[splitIndex];
            sortedArray[splitIndex] = pivotValue;
            recursiveSort(start, splitIndex - 1);
            recursiveSort(splitIndex + 1, end);
        };

        recursiveSort(0, arr.length - 1);
        let first = sortedArray[0];
        let last = sortedArray[sortedArray.length - 1];
        return [first, last]
    };
console.log(quickSort([2334454,5]) )
