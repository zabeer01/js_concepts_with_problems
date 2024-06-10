const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

  for(let i=0;i < grid.length ;i++){
   /*  console.log('i val ' + i); */
    for(let j=0;j<grid[i].length;j++){
        console.log(i +' '+ j);
    }
  }