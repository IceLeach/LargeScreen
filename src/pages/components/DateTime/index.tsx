import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './index.less';

const DateTime: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>('');

  useEffect(() => {
    setInterval(() => {
      setDateTime(moment().format('YYYY年M月D日\xa0\xa0dddd\xa0\xa0HH:mm:ss'));
    }, 1000);
  }, []);

  return <div className={styles.dateTime}>{dateTime}</div>;
};

export default React.memo(DateTime);
