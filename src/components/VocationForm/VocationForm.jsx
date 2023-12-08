import Checkbox from '../VocationFormComponents/Checkbox/Checkbox';
import DateInput from '../VocationFormComponents/DateInput/DateInput';
import NumberInput from '../VocationFormComponents/NumberInput/NumberInput';
import SelectOption from '../VocationFormComponents/SelectOption/SelectOption';
import SubmitButton from '../VocationFormComponents/SubmitButton/SubmitButton';
import TextArea from '../VocationFormComponents/TextArea/TextArea';
import TextInput from '../VocationFormComponents/TextInput/TextInput';
import './VocationForm.scss';
import { useState } from 'react';

export default function VocationForm() {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
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
  
  
  
  
  
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDeadlineChange(e) {
    setDeadline(e.target.value);
    console.log(deadline);
  }
  return (
    <fieldset className='fieldset'>
        <h1 className='form__title'>Vakansiya yaratish</h1>
        <p className='form__description'>Yangi vakansiya uchun ma'lumotlar</p>
      <form className='form'>
        <TextInput 
        id='title' 
        label='Sarlavha' 
        placeholder='Sarlavha' 
        handleChange={handleTitleChange}
        isRequired={true}
        />

        <div className="select-group">
          <DateInput
          id='deadline'
          placeholder='Deadline'
          title='Ariza topshirish muddati'
          isRequired={true}
          handleChange={handleDeadlineChange}
          />

          <SelectOption 
          options={workTypes}
          id='WorkType'
          name='Ish turi'
          />

          <SelectOption 
          options={jobSchedules}
          id='jobSchedule'
          name='Ish vaqti'
          />
        </div>

        <div className="select-group-location">
          <SelectOption 
          options={asianCountries}
          id='selectCountries'
          name="Davlat"
          />
          <SelectOption 
          options={asianCities}
          id='asianCities'
          name='Shahar'
          />
        </div>
        <div className="select-group-location">
          <SelectOption 
          options={asianLanguages}
          id='asianLanguages'
          name="Til"
          />
          <SelectOption 
          options={languageProficiency}
          id='languageProficiency'
          name='Darajasi'
          />
        </div>
        <TextInput 
        id='industry' 
        label='Soha' 
        placeholder='Soha' 
        handleChange={handleTitleChange}
        isRequired={true}
        />
        <TextInput 
        id='skills' 
        label="Ko'nikmalar" 
        placeholder="Ko'nikmalar" 
        handleChange={handleTitleChange}
        isRequired={true}
        />
        <div className="salary-input">
          <NumberInput 
          id='minimumSalary'
          label='Minimal maosh'
          placeholder='Min'
          handleChange={handleTitleChange}
          isRequired={true}
          />
          <NumberInput 
          id='maximumSalary'
          label='Maximum maosh'
          placeholder='Max'
          handleChange={handleTitleChange}
          isRequired={true}
          />
        </div>
        <Checkbox 
        id='bargain-checkbox'
        title='Kelishiladi'
        />
        <div className="applicant-level">
          <SelectOption 
          options={educationLevels}
          id='applicantLevel'
          name='Darajasi'
          />
          <SelectOption 
          options={experienceOptions}
          id='experience'
          name='Tajriba'
          />
        </div>
        <TextArea
        id='description-textarea'
        label='Izoh'
        placeholder='Vakansiya uchun izoh qoldiring'
        handleChange={handleTitleChange}
        isRequired={true}
         />
         <SubmitButton />
      </form>
    </fieldset>
  )
}
