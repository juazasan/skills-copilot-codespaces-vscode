function skillsMember(){

    var member = {
        name: "John",
        age: 30,
        skills: ["js", "html", "css"],
        salary: 1000,
        bonus: 200,
        getSalary: function(){
            return this.salary + this.bonus;
        }
    };

    return member;
  
}