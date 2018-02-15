module.exports.logic=function(strongArr,arr,h1Arr){

  for(i=0;i<strongArr.length;i++){
    strongArr[i]=strongArr[i].trim();
  }

  for(i=0;i<h1Arr.length;i++){
    h1Arr[i]=h1Arr[i].trim();
  }

  console.log("Array would be :",arr);
  //console.log("strong array would be :",strongArr);
  //console.log("h1 array would be:",h1Arr);

  var details=/Detail(s)?|DETAIL(S)?/;
  var project=/PROJECT(S)?|Project(s)?/;
  var achievements=/Achievement(s)?Accomplishment(s)?|ACHIEVEMENTS|ACCOMPLISHMENTS/;
  var ts=/\b([T](echn|ECHN)(ical|ology|ICAL|OLOGY)[\s|_\-]?[S](kill|KILL)(s|S)?)|Areas of expertise/;
  var academic=/Academic(s)?|ACADEMIC(S)?|EDUCATION|EDUCATIONAL QUALIFICATION(S)?|Educational Qualifications|QUALIFICATION(s)|Qualification(s)?/;
  var position=/Position(s)?|POSITION(S)?/;
  var ad_skills=/Skill(s)?/;
  var language=/Language(s)?/;
  var objective=/Career Objective|OBJECTIVE/;
  var job_profile=/Job Profile|JOB PROFILE/;
  var summary=/Summary|SUMMARY/;
  var strength=/STRENGTH(S)?|Strength(s)?/
  var intrest=/Interests|Hobbies|INTERESTS|HOBBIES/
  var experience=/EXPERIENCE|Professional Experience|PROFESSIONAL EXPERIENCE|Experience/;
  var declaration=/Declaration|DECLARATION/;
  var preference=/Preferences/;
  var extra=/EXTRA|Extra Curriculum achievements/;

  var words=[academic,project,position,achievements,ts,details,ad_skills,summary,strength,intrest,experience,declaration,extra,preference,objective,job_profile];

//for finding name
  if(h1Arr != null && h1Arr.length>0 && h1Arr[0].trim()!="CV" && h1Arr[0].trim()!="RESUME")
  {
    console.log("Name is :",h1Arr[0])
  }
  else if(strongArr != null && strongArr[0].trim()!="CV" && strongArr[0].trim()!="RESUME")
  console.log("Name is :",strongArr[0]);
  else {
    console.log("Name is :",strongArr[1])
  } //end of name

//Start for Gender
    var gend1=/\bmale/i;
    var gend2=/\bfemale/i;
    if(gend1.test(arr))
    {
      console.log("Gender : male");
    }
    else if(gend2.test(arr)){
      console.log("Gender : female");
    }
    else{
      console.log("NO gender found")
    }//End of Gender

//DOB starts here
    if(/\d{1,2}(rd|th)(\s)?[a-zA-Z]+(\s|,)?\d{4}/.test(arr) ||  /\d{1,4}[/|-]\d{2}[|/|-]\d{1,4}/.test(arr))
    {
      var dob1=[];
      var dob2=[];
      var dob1=arr.toString().match(/\d{1,2}(,|rd|th)(\s)?[a-zA-Z]+(,)?(\s)?\d{4}/)
      var dob2=arr.toString().match(/\d{1,4}[/|-]\d{2}[|/|-]\d{1,4}/)

      if(dob1 != null && dob1.length > 0){
        console.log("DOB : ",dob1[0]);
      }
      else if(dob2 != null && dob2.length > 0)
      {
        console.log("DOB : ",dob2[0]);
      }
      }
      else{
        console.log("No DOB found");
      } //End of DOB

//Email Starts here
      if(/\w+([.\w]+)+@[a-z]+([.][a-z]+){1,2}/.test(arr))
      {
        var mailId=arr.toString().match(/\w+([.\w]+)+@[a-z]+([.][a-z]+){1,2}/);
        console.log("email id is :",mailId[0]);
        }
        else{
          console.log("No mail found");
        } //End of email


}
