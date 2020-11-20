const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 6;
        break;
  
      default:
        return 'Error, try again'
  
    }
}
  
const getActualSleepHours = () => {
    return getSleepHours ('monday') + getSleepHours ('tuesday') + getSleepHours ('wednesday') + getSleepHours ('thursday') + getSleepHours ('friday') + getSleepHours ('saturday') + getSleepHours ('sunday');
}
  
const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
}
  
const calculateSleepDept = () => {
    let actualSleepHours = getActualSleepHours ();
    let idealSleepHours = getIdealSleepHours ();
    if (actualSleepHours === idealSleepHours) {
      console.log (`You had ${actualSleepHours} hours which is a perfect amount of sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log (`You had ${actualSleepHours} hours which is more sleep than needed.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log (`You had ${actualSleepHours} hours which is less than needed, take a rest.`);
    }
}
  
calculateSleepDept ();