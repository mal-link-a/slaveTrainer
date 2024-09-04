import { makeObservable, observable, action, computed } from 'mobx'
import type { Girl,  GirlExperience,  GirlMental,  StatExp } from '../../entities/Girl'
import { MentalStats } from '../../entities/MentalStats/model/types';
import { mentalStats } from '../../entities/MentalStats/model/mentalStats';

const firstGirl:Girl  = {
  id: 'Hanabi',
  name: 'Ханаби',
  energy: 3,
  exp: {
    singing: {
      level: 0,
      exp: 0
    },
    dance: {
      level: 1,
      exp: 0
    },
    systemAdministration: {
      level: 2,
      exp: 0
    },
    programming: {
      level: 3,
      exp: 0
    },
    coffeeBrewing: {
      level: 4,
      exp: 0
    },
    doctoring: {
      level: 5,
      exp: 0
    },
    firstAid: {
      level: 4,
      exp: 0
    },
    surgery: {
      level: 3,
      exp: 0
    },
    driving: {
      level: 2,
      exp: 0
    },
    userPC: {
      level: 1,
      exp: 0
    },
    management: {
      level: 0,
      exp: 0
    },
    preventionOfAccidents: {
      level: 1,
      exp: 0
    },
    construction: {
      level: 2,
      exp: 0
    },
    heavyMachinery: {
      level: 3,
      exp: 0
    },
    factoryMachines: {
      level: 4,
      exp: 0
    },
    technicalProcess: {
      level: 0,
      exp: 0
    }
  },
  mental: {
    contribution: 0,   
    obedience: 0,
    rejection: 5,
    intelligence: 5,
    mood: 5
  }
}

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable slave: Girl = firstGirl;
  

  @observable currentGirl: number = 0;


  @action trainGirl = (key: string, value: StatExp) => {
      this.slave.exp[key as keyof GirlExperience] = value;   
    --this.slave.energy;
  }

  @action changeMentalStats = (value: GirlMental) => {    
    const currentData = Object.entries(this.slave.mental)
        for (let i=0; i< currentData.length; i++) {
      const [key, key2] = [currentData[i][0] as keyof GirlMental,  currentData[i][0] as  keyof MentalStats];
      if (value[key] > mentalStats[key2].maxValue) {
        value[key] = mentalStats[key2].maxValue;        
      } else if (value[key] < mentalStats[key2].minValue){
        value[key] = mentalStats[key2].minValue; 
      }
    }
    this.slave.mental = value;
}

  @action spendEnergy = () => {    
    --this.slave.energy;
  }
  @action newBadDay = () => {    
    this.slave.energy = 3;
    this.slave.mental.obedience++;
  }
  @action newNormalDay = () => {    
    this.slave.energy = 3;
  }
  @action newGoodDay = () => {    
    this.slave.energy = 3;
    this.slave.mental.obedience--;
    this.slave.mental.rejection++;
  }
}

export const slaveStore = new Store();