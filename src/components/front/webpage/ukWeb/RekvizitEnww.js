import React from 'react';
import '../mainWeb/Rekvizitww.css'; 

const RekvizytyModal1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="rekvizyty-overlay" onClick={onClose}>
      <div className="rekvizyty-content" onClick={(e) => e.stopPropagation()}>
        <button className="rekvizyty-close" onClick={onClose}>×</button>
        <h2>Реквізити</h2>
        <p><strong>Назва:</strong> ФО-П Мандзій Зінаїда Миколаївна</p>
        <p><strong>Код ЄДРПОУ:</strong> 1862505226</p>
        <p><strong>ІПН:</strong> 1862505226</p>
        <p><strong>Свідотство платника ПДВ:</strong> [Не вказано]</p>
        <p><strong>Юридична та фізична адреса:</strong> 31331, Хмельницька обл., Хмельницький р-н, с.Малиничі, вул.Набережна, б 73</p>
        <p><strong>Поштова адреса:</strong> 29000, Хмельницький, Проскурівського Підпілля 67, ТЦ Атріум</p>
      </div>
    </div>
  );
};

export default RekvizytyModal1;