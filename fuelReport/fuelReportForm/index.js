import React from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import CameraView from './CameraView';
import ReportFormView from './ReportFormView';
const fieldNames = {
  name: 'ФИО',
  cardNumber: 'Номер карты',
  fuel: 'Тип топливо',
  refuelingDate: 'Дата заправки',
  volume: 'Обьем',
  carNumber: 'Номер машины',
  adometr: 'Адометр',
};
const fuelReportForm = () => {
  const [cameraVisible, setCameraVisible] = React.useState(false)
  const [form, setForm] = React.useState({
    name: '',
    cardNumber: '',
    fuel: '',
    refuelingDate: '',
    volume: '',
    carNumber: '',
    adometr: '',
  });
//   useEffect(() => {
//     const getPermissions = async () => {
//         await Camera.requestCameraPermission();
//         const status = await Camera.getCameraPermissionStatus();
//         setHasPermission(status === 'authorized');
//     };
//     getPermissions();
// }, []);
  const fuelType = [
    {type: '1', name: 'Диз топливо летнее'},
    {type: '2', name: 'Диз топливо зимнее'},
    {type: '3', name: 'АИ92'},
  ];

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  return <React.Fragment>
   {cameraVisible? <CameraView modalVisible={cameraVisible} />:
    <ReportFormView form={form} handleChange={handleChange} />}
    </React.Fragment>;
};

export default fuelReportForm;