import Success from '../Success/Success';
import Checkbox from '../VocationFormComponents/Checkbox/Checkbox';
import DateInput from '../VocationFormComponents/DateInput/DateInput';
import NumberInput from '../VocationFormComponents/NumberInput/NumberInput';
import SelectOption from '../VocationFormComponents/SelectOption/SelectOption';
import SubmitButton from '../VocationFormComponents/SubmitButton/SubmitButton';
import TextArea from '../VocationFormComponents/TextArea/TextArea';
import TextInput from '../VocationFormComponents/TextInput/TextInput';
import './VocationForm.scss';
import { useState } from 'react';


const workTypes = [
  {
    title: 'Programming',
    value: 'programming'
  },
  {
    title: 'Accounting',
    value: 'accounting'
  },
  {
    title: 'Design',
    value: 'design'
  },
  {
    title: 'Marketing',
    value: 'marketing'
  },
  {
    title: 'Customer Support',
    value: 'customer_support'
  },
  {
    title: 'Data Entry',
    value: 'data_entry'
  },
  {
    title: 'Human Resources',
    value: 'human_resources'
  },
  {
    title: 'Sales',
    value: 'sales'
  },
  {
    title: 'Engineering',
    value: 'engineering'
  },
  {
    title: 'Writing/Content Creation',
    value: 'writing'
  },
  {
    title: 'Healthcare',
    value: 'healthcare'
  },
  {
    title: 'Education',
    value: 'education'
  },
  {
    title: 'Finance',
    value: 'finance'
  }
  // Add more job types as needed
  ];
  const jobSchedules = [
    {
      title: 'Full-Time',
      value: 'full_time'
    },
    {
      title: 'Part-Time',
      value: 'part_time'
    },
    {
      title: 'Contract',
      value: 'contract'
    },
    {
      title: 'Temporary',
      value: 'temporary'
    },
    {
      title: 'Freelance',
      value: 'freelance'
    },
    {
      title: 'Internship',
      value: 'internship'
    },
    {
      title: 'Remote',
      value: 'remote'
    },
    {
      title: 'Flexible',
      value: 'flexible'
    },
  ];
  const asianCountries = [
    {
      title: 'Afghanistan',
      value: 'AF'
    },
    {
      title: 'Armenia',
      value: 'AM'
    },
    {
      title: 'Azerbaijan',
      value: 'AZ'
    },
    {
      title: 'Bahrain',
      value: 'BH'
    },
    {
      title: 'Bangladesh',
      value: 'BD'
    },
    {
      title: 'Bhutan',
      value: 'BT'
    },
    {
      title: 'Brunei',
      value: 'BN'
    },
    {
      title: 'Cambodia',
      value: 'KH'
    },
    {
      title: 'China',
      value: 'CN'
    },
    {
      title: 'Cyprus',
      value: 'CY'
    },
    {
      title: 'Georgia',
      value: 'GE'
    },
    {
      title: 'India',
      value: 'IN'
    },
    {
      title: 'Indonesia',
      value: 'ID'
    },
    {
      title: 'Iran',
      value: 'IR'
    },
    {
      title: 'Iraq',
      value: 'IQ'
    },
    {
      title: 'Israel',
      value: 'IL'
    },
    {
      title: 'Japan',
      value: 'JP'
    },
    {
      title: 'Jordan',
      value: 'JO'
    },
    {
      title: 'Kazakhstan',
      value: 'KZ'
    },
    {
      title: 'Kuwait',
      value: 'KW'
    },
    {
      title: 'Kyrgyzstan',
      value: 'KG'
    },
    {
      title: 'Laos',
      value: 'LA'
    },
    {
      title: 'Lebanon',
      value: 'LB'
    },
    {
      title: 'Malaysia',
      value: 'MY'
    },
    {
      title: 'Maldives',
      value: 'MV'
    },
    {
      title: 'Mongolia',
      value: 'MN'
    },
    {
      title: 'Myanmar (Burma)',
      value: 'MM'
    },
    {
      title: 'Nepal',
      value: 'NP'
    },
    {
      title: 'North Korea',
      value: 'KP'
    },
    {
      title: 'Oman',
      value: 'OM'
    },
    {
      title: 'Pakistan',
      value: 'PK'
    },
    {
      title: 'Palestine',
      value: 'PS'
    },
    {
      title: 'Philippines',
      value: 'PH'
    },
    {
      title: 'Qatar',
      value: 'QA'
    },
    {
      title: 'Russia',
      value: 'RU'
    },
    {
      title: 'Saudi Arabia',
      value: 'SA'
    },
    {
      title: 'Singapore',
      value: 'SG'
    },
    {
      title: 'South Korea',
      value: 'KR'
    },
    {
      title: 'Sri Lanka',
      value: 'LK'
    },
    {
      title: 'Syria',
      value: 'SY'
    },
    {
      title: 'Taiwan',
      value: 'TW'
    },
    {
      title: 'Tajikistan',
      value: 'TJ'
    },
    {
      title: 'Thailand',
      value: 'TH'
    },
    {
      title: 'Timor-Leste',
      value: 'TL'
    },
    {
      title: 'Turkey',
      value: 'TR'
    },
    {
      title: 'Turkmenistan',
      value: 'TM'
    },
    {
      title: 'United Arab Emirates',
      value: 'AE'
    },
    {
      title: 'Uzbekistan',
      value: 'UZ'
    },
    {
      title: 'Vietnam',
      value: 'VN'
    },
    {
      title: 'Yemen',
      value: 'YE'
    }
  ];
  const asianCities = [
    {
      title: 'Tokyo',
      value: 'tokyo'
    },
    {
      title: 'Beijing',
      value: 'beijing'
    },
    {
      title: 'Mumbai',
      value: 'mumbai'
    },
    {
      title: 'Seoul',
      value: 'seoul'
    },
    {
      title: 'Shanghai',
      value: 'shanghai'
    },
    {
      title: 'Bangkok',
      value: 'bangkok'
    },
    {
      title: 'Singapore',
      value: 'singapore'
    },
    {
      title: 'Dubai',
      value: 'dubai'
    },
    {
      title: 'Istanbul',
      value: 'istanbul'
    },
    {
      title: 'Karachi',
      value: 'karachi'
    },
    {
      title: 'Jakarta',
      value: 'jakarta'
    },
    {
      title: 'Manila',
      value: 'manila'
    },
    {
      title: 'Delhi',
      value: 'delhi'
    },
    {
      title: 'Hong Kong',
      value: 'hong_kong'
    },
    {
      title: 'Taipei',
      value: 'taipei'
    },
    {
      title: 'Hanoi',
      value: 'hanoi'
    },
    {
      title: 'Kuala Lumpur',
      value: 'kuala_lumpur'
    },
    {
      title: 'Dhaka',
      value: 'dhaka'
    },
    {
      title: 'Riyadh',
      value: 'riyadh'
    },
    {
      title: 'Colombo',
      value: 'colombo'
    }
    // Add more cities as needed
  ];
  const asianLanguages = [
    {
      title: 'Japanese',
      value: 'ja'
    },
    {
      title: 'Chinese',
      value: 'zh'
    },
    {
      title: 'Korean',
      value: 'ko'
    },
    {
      title: 'Hindi',
      value: 'hi'
    },
    {
      title: 'Bengali',
      value: 'bn'
    },
    {
      title: 'Thai',
      value: 'th'
    },
    {
      title: 'Indonesian',
      value: 'id'
    },
    {
      title: 'Malay',
      value: 'ms'
    },
    {
      title: 'Tagalog',
      value: 'tl'
    },
    {
      title: 'Vietnamese',
      value: 'vi'
    },
    {
      title: 'Tamil',
      value: 'ta'
    },
    {
      title: 'Arabic',
      value: 'ar'
    },
    {
      title: 'Turkish',
      value: 'tr'
    },
    {
      title: 'Persian (Farsi)',
      value: 'fa'
    },
    {
      title: 'Urdu',
      value: 'ur'
    },
    {
      title: 'Sinhala',
      value: 'si'
    },
    {
      title: 'Mongolian',
      value: 'mn'
    },
    {
      title: 'Lao',
      value: 'lo'
    },
    {
      title: 'Nepali',
      value: 'ne'
    },
    {
      title: 'Khmer',
      value: 'km'
    }
    // Add more languages as needed
  ];
  const languageProficiency = [
    {
      title: 'Beginner',
      value: 'beginner'
    },
    {
      title: 'Elementary',
      value: 'elementary'
    },
    {
      title: 'Intermediate',
      value: 'intermediate'
    },
    {
      title: 'Advanced',
      value: 'advanced'
    },
    {
      title: 'Fluent',
      value: 'fluent'
    },
    {
      title: 'Native/Bilingual',
      value: 'native'
    }
    // Add more proficiency levels as needed
  ];
  const educationLevels = [
    {
      title: 'High School',
      value: 'high_school'
    },
    {
      title: 'Associate Degree',
      value: 'associate_degree'
    },
    {
      title: 'Bachelor\'s Degree',
      value: 'bachelors_degree'
    },
    {
      title: 'Master\'s Degree',
      value: 'masters_degree'
    },
    {
      title: 'Doctorate (Ph.D.)',
      value: 'doctorate'
    },
    {
      title: 'Vocational/Technical School',
      value: 'vocational_technical'
    },
    {
      title: 'Professional Certification',
      value: 'professional_certification'
    },
    {
      title: 'Other',
      value: 'other'
    }
    // Add more education levels as needed
  ];
  const experienceOptions = [
    {
      title: 'Entry Level',
      value: 'entry_level'
    },
    {
      title: '1-3 years',
      value: '1-3_years'
    },
    {
      title: '3-5 years',
      value: '3-5_years'
    },
    {
      title: '5-7 years',
      value: '5-7_years'
    },
    {
      title: '7-10 years',
      value: '7-10_years'
    },
    {
      title: '10+ years',
      value: '10_plus_years'
    }
    // Add more experience options as needed
  ];
  


export default function VocationForm() {
  const [inputData, setInputData] = useState({
    title: '',
    titleError: '',
    date: '',
    dateError: '',
    WorkType: '',
    WorkTypeError: '',
    jobSchedule: '',
    jobScheduleError: '',
    selectCountries: '',
    selectCountriesError: '',
    asianCities: '',
    asianCitiesError: '',
    asianLanguages: '',
    asianLanguagesError: '',
    languageProficiency: '',
    languageProficiencyError: '',
    educationLevels: '',
    educationLevelsError: '',
    industry: '',
    industryError: '',
    skills: '',
    skillsError: '',
    minimumSalary: '',
    minimumSalaryError: '',
    maximumSalary: '',
    maximumSalaryError: '',
    bargainCheckbox: false,
    applicantLevel: '',
    applicantLevelError: '',
    experience: '',
    experienceError: '',
    descriptionTextarea: '',
    descriptionTextareaError: '',
    deadline: '',
    deadlineError: ''
  })
  const [hasErrors, setHasErrors] = useState(false);
  const [addSuccessPage, setAddSuccessPage] = useState(false);
  function handleSubmit() {
    if (inputData.title.length <= 3) {
      inputData.titleError = `Sarlavha 3 ta belgidan ko'p bo'lishi kerak`;
    } else {
      inputData.titleError = ``;
    }
    if (!inputData.WorkType.length) {
      inputData.WorkTypeError = `Ish turnini tanlashingiz shart`;
    } else {
      inputData.WorkTypeError = ``;
    }
    if (!inputData.jobSchedule.length) {
      inputData.jobScheduleError = `Ish vaqtini tanlashingiz shart`;
    } else {
      inputData.jobScheduleError = ``;
    }
    if (!inputData.selectCountries.length) {
      inputData.selectCountriesError = `Davlatni tanlashingiz shart`;
    } else {
      inputData.selectCountriesError = ``;
    }
    if (!inputData.asianCities.length) {
      inputData.asianCitiesError = `Shaharni tanlashingiz shart`;
    } else {
      inputData.asianCitiesError = ``;
    }
    if (!inputData.asianLanguages.length) {
      inputData.asianLanguagesError = `Tilni tanlashingiz shart`;
    } else {
      inputData.asianLanguagesError = ``;
    }
    if (!inputData.languageProficiency.length) {
      inputData.languageProficiencyError = `Tilni tanlashingiz shart`;
    } else {
      inputData.languageProficiencyError = ``;
    }
    if (!inputData.languageProficiency.length) {
      inputData.languageProficiencyError = `Tilni tanlashingiz shart`;
    } else {
      inputData.languageProficiencyError = ``;
    }
    if (!inputData.industry.length) {
      inputData.industryError = `Sohani kiritishingiz shart`;
    } else {
      inputData.industryError = ``;
    }
    if (!inputData.skills.length) {
      inputData.skillsError = `Ko'nikmalarni kiritishingiz shart`;
    } else {
      inputData.skillsError = ``;
    }
    if (!inputData.minimumSalary.length) {
      inputData.minimumSalaryError = `Minimum maoshni kiritishingiz shart`;
    } else {
      inputData.minimumSalaryError = ``;
    }
    if (!inputData.maximumSalary.length) {
      inputData.maximumSalaryError = `Maximum maoshni kiritishingiz shart`;
    } else {
      inputData.maximumSalaryError = ``;
    }
    if (!inputData.educationLevels.length) {
      inputData.educationLevelsError = "Ta'lim darajasini tanlashingiz shart";
    } else {
      inputData.educationLevelsError = "";
    }
    if (!inputData.experience.length) {
      inputData.experienceError = "Tajriba oralig'ini tanlashingiz shart";
    } else {
      inputData.experienceError = "";
    }
    if (!inputData.descriptionTextarea.length) {
      inputData.descriptionTextareaError = "Izoh qoldirishingiz shart";
    } else {
      inputData.descriptionTextareaError = "";
    }
    if (!inputData.deadline.length) {
      inputData.deadlineError = "Ariza muddatini qoldirishingiz shart";
    } else {
      inputData.deadlineError = "";
    }
    setInputData((prevData) => {
      return {...prevData, ...inputData}
    })

    setAddSuccessPage(true);

    if (!(inputData.titleError &&
                  inputData.WorkTypeError &&
                  inputData.jobScheduleError &&
                  inputData.selectCountriesError &&
                  inputData.asianCitiesError &&
                  inputData.asianLanguagesError &&
                  inputData.languageProficiencyError &&
                  inputData.industryError &&
                  inputData.skillsError &&
                  inputData.minimumSalaryError &&
                  inputData.maximumSalaryError &&
                  inputData.educationLevelsError &&
                  inputData.experienceError &&
                  inputData.descriptionTextareaError &&
                  inputData.deadlineError)) {  
        setHasErrors(true);
      } else {
        setHasErrors(false);
      }
  }

  function handleChange(event) {
    const prevData = inputData;
    if (event.target.name == 'bargainCheckbox') {
      inputData[event.target.name] = event.target.checked;
    } else {
      inputData[event.target.name] = event.target.value;
    }
    setInputData(() => {
      return {...prevData, ...inputData}
    });
  }
  
  return (
    <fieldset className='fieldset'>
        <h1 className='form__title'>Vakansiya yaratish</h1>
        <p className='form__description'>Yangi vakansiya uchun ma'lumotlar</p>
      <form className='form'>
        <TextInput 
          id='title' 
          name='title'
          label='Sarlavha' 
          placeholder='Sarlavha' 
          handleChange={handleChange}
          isRequired={true}
          errorText={inputData['titleError']}
        />

        <div className="select-group">
          <DateInput
            id='deadline'
            name='deadline'
            placeholder='Deadline'
            title='Ariza topshirish muddati'
            isRequired={true}
            handleChange={handleChange}
            errorText={inputData['deadlineError']}
          />

          <SelectOption 
            options={workTypes}
            id='WorkType'
            name='WorkType'
            label='Ish turi'
            handleChange={handleChange}
            errorText={inputData['WorkTypeError']}
          />

          <SelectOption 
            options={jobSchedules}
            id='jobSchedule'
            name='jobSchedule'
            label='Ish vaqti'
            handleChange={handleChange}
            errorText={inputData['jobScheduleError']}
          />
        </div>

        <div className="select-group-location">
          <SelectOption 
            options={asianCountries}
            id='selectCountries'
            name='selectCountries'
            handleChange={handleChange}
            label="Davlat"
            errorText={inputData['selectCountriesError']}
          />
          <SelectOption 
            options={asianCities}
            id='asianCities'
            name='asianCities'
            label='Shahar'
            handleChange={handleChange}
            errorText={inputData['asianCitiesError']}
          />
        </div>
        <div className="select-group-location">
          <SelectOption 
            options={asianLanguages}
            id='asianLanguages'
            name='asianLanguages'
            label="Til"
            handleChange={handleChange}
            errorText={inputData['asianLanguagesError']}
          />
          <SelectOption 
            options={languageProficiency}
            id='languageProficiency'
            name='languageProficiency'
            label='Darajasi'
            handleChange={handleChange}
            errorText={inputData['languageProficiencyError']}
          />
        </div>
        <TextInput 
          id='industry' 
          name='industry' 
          label='Soha' 
          placeholder='Soha' 
          handleChange={handleChange}
          isRequired={true}
          errorText={inputData['industryError']}
        />
        <TextInput 
          id='skills' 
          name='skills' 
          label="Ko'nikmalar" 
          placeholder="Ko'nikmalar" 
          handleChange={handleChange}
          isRequired={true}
          errorText={inputData['skillsError']}
        />
        <div className="salary-input">
          <NumberInput 
            id='minimumSalary'
            name='minimumSalary'
            label='Minimal maosh'
            placeholder='Min'
            handleChange={handleChange}
            isRequired={true}
            errorText={inputData['minimumSalaryError']}
          />
          <NumberInput 
            id='maximumSalary'
            name='maximumSalary'
            label='Maximum maosh'
            placeholder='Max'
            handleChange={handleChange}
            isRequired={true}
            errorText={inputData['maximumSalaryError']}
          />
        </div>
        <Checkbox 
          id='bargainCheckbox'
          name='bargainCheckbox'
          title='Kelishiladi'
          handleChange={handleChange}
        />
        <div className="applicant-level">
          <SelectOption 
            options={educationLevels}
            id='applicantLevel'
            name='educationLevels'
            label="Ta'lim darajasi"
            handleChange={handleChange}
            errorText={inputData['educationLevelsError']}
          />
          <SelectOption 
            options={experienceOptions}
            id='experience'
            name='experience'
            label='Tajriba'
            handleChange={handleChange}
            errorText={inputData['experienceError']}
          />
        </div>
        <TextArea
          id='descriptionTextarea'
          name='descriptionTextarea'
          label='Izoh'
          placeholder='Vakansiya uchun izoh qoldiring'
          isRequired={true}
          handleChange={handleChange}
          errorText={inputData['descriptionTextareaError']}
         />
         <SubmitButton
          handleSubmit={handleSubmit}
          />
      </form>
      {addSuccessPage ? (!hasErrors ? Success() : null) : null}
    </fieldset>
  )
}
