import { StudiedNormalStats } from "./types";



export const studiedNormalStats: StudiedNormalStats = {
    driving: {
        name: "Вождение",
        description: "Навыки вождения автотранспорта",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.","Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой" , "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету." ,"Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь." ,"Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом." ,"Вам больше нечему учить воспитуемого."]
    },
    userPC: {
        name: "Компьютер",
        description: "Уверенный пользователь ПК",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.","Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой" , "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету." ,"Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь." ,"Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом." ,"Вам больше нечему учить воспитуемого."]
    },
    management: {
        name: "Делопроизводство",
        description: "",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.", "Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой", "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету.", "Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь.", "Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом.", "Вам больше нечему учить воспитуемого."],
        conditions: [["userPC", 5]]
    },
    preventionOfAccidents: {
        name: "ТБ",
        description: "Техника безопасности при выполнении различных работ",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.","Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой" , "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету." ,"Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь." ,"Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом." ,"Вам больше нечему учить воспитуемого."]
    },
    construction: {
        name: "Строительство",
        description: "",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.", "Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой", "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету.", "Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь.", "Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом.", "Вам больше нечему учить воспитуемого."],
        conditions: [["preventionOfAccidents",3]]
    },
    heavyMachinery: {
        name: "Тяжелая техника",
        description: "Тяжелая техника",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.", "Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой", "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету.", "Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь.", "Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом.", "Вам больше нечему учить воспитуемого."],
        conditions: [["preventionOfAccidents",3]]
    },
    factoryMachines: {
        name: "Станки",
        description: "Работа на заводских станках",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.", "Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой", "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету.", "Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь.", "Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом.", "Вам больше нечему учить воспитуемого."],
        conditions: [["preventionOfAccidents",2]]
    },
    technicalProcess:{
        name: "Техпроцесс",
        description: "Знание технического процесса завода",
        lessonText: ["Воспитуемый понятия не имеет о предмете урока, так что вы преподаёте ему основы.","Воспитуемый имеет некоторое представление о предмете урока, так что вы закрепляете материал некоторой начальной практикой" , "Вы решаете, что воспитуемый достаточно продвинулся, чтобы перейти к более продвинутым темам. Вы преподаёте ему базизованную базу по предмету." ,"Воспитуемый чувствует себя уверенно в данной теме, но ему не хватает практики, чтобы отшлифовать имеющиеся знания. Этим вы сегодня и займётесь." ,"Воспитуемому пора попробовать себя в продвинутых практиках указанной темы, и вы радостно поможете ему в этом." ,"Вам больше нечему учить воспитуемого."]
    }
};
export const studiedNormalStatsKeys = Object.keys(studiedNormalStats)