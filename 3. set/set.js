const set = new Set([1, 2, 3]);

// Display set values
for(const item of set) {
    console.log(set);
}

// To add a new value
set.add(4); // [1, 2, 3, 4]

// Note :- If you add the duplicate value, it ignores
set.add(4); // [1, 2, 3, 4]

// Check if the value exist or not
set.has(4); // true

// Delete the value from set
set.delete(3); // [1, 2, 4]

// Check the number of items
set.size; // 3

// Delete all values from set
set.clear()