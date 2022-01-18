import Select from 'react-select'
import {SelectStyles} from './SelectCategory.styled'

const CATEGORIES = [
    { value: 'Транспорт', label: 'Транспорт', type: false},
    { value: 'Здоровье', label: 'Здоровье', type: false },
    { value: 'Алкоголь', label: 'Алкоголь', type: false },
    { value: 'Развлечения', label: 'Развлечения', type: false },
    { value: 'Всё для дома', label: 'Всё для дома', type: false },
    { value: 'Техника', label: 'Техника', type: false },
    { value: 'Коммуналка, связь', label: 'Коммуналка, связь', type: false },
    { value: 'Спорт, хобби', label: 'Спорт, хобби', type: false },
    { value: 'Образование', label: 'Образование', type: false },
    { value: 'Прочее', label: 'Прочее', type: false },
    { value: 'ЗП', label: 'ЗП', type: true },
    { value: 'Доп. доход', label: 'Доп. доход', type: true },
]

  const SelectCategory = () => (
    <Select
      styles={SelectStyles}
      options={CATEGORIES}
      placeholder='Категория товара'
    />
);
  
export default SelectCategory;