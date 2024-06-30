const map = new Map([['a', 1], ['b', 2]]);

// Display map values
for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

/*
    Output
    {
        a: 1,
        b: 2
    }
*/

// Add a new value
map.set('c',3);

// Key exists or not
map.has('a');

// Delete a key value
map.delete('c');

// Check the num of key values pairs
map.size;

// Delete all the values
map.clear();
