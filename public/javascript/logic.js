var isHidden = true;
    const element=document.querySelectorAll(".show");
    const description= document.querySelectorAll(".description");
    for(let i=0;i<element.length;i++){
      const index =i;
      element[i].addEventListener("click",function(){
        if(isHidden){
        description[index].style.display="block";
        console.log("I have here! and index is : "+index);
        this.textContent="Show Less"
        isHidden= false;
        }
        else{
          description[index].style.display="none";
        console.log("I have here! and index is : "+index);
        this.textContent="Show More"
          isHidden= true;
        }

      });
    }