import React, {useState} from 'react'
import './Home.css'
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { firebase } from '../store/config'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import SliderComponent from '../components/SliderComponent';
import capitalMap from '../store/capitalMap.jpg';
import newCapImg from '../pics/newCapImg.png';
import alameenPic1 from '../store/alameenPic1.png';
import alameenPic2 from '../store/alameenPic2.png';
import alameenMap from '../store/alameenMap.png';
import homeMonoreel2 from '../pics/homeMonoreel2.jpg' ;
import homeIconicTower1 from '../pics/homeIconicTower1.jpg' ;
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 14,
      padding: '4px 8px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#090775',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#9ee5ff',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.3rem rgba(255,255,255,.5)',
      },
    },
  })(Button);
  
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0.25),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });



function Home() {

    const classes = useStyles();

    const [activeCity, setActiveCity] = useState('capital')
    const [lang, setLang] = useState('/ar')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [message, setMessage] = useState('')

   const handleMessage = (e)=>{
    e.preventDefault();
    const mid = Math.floor(Math.random() * 1000000).toString()
    const messageDetails = {id:mid,name,email,contactNumber,message, time: new Date() }
    
    firebase.firestore().collection('messages').doc(mid).set(messageDetails).then(()=>{console.log(messageDetails)}).then(()=>{alert('Message has been Sent, Thank you')})
              .catch((error) => {
                  alert(error)
              });
    

    console.log(messageDetails);
    setName('')
    setEmail('')
    setContactNumber('')
    setMessage('')
   }

   
    return (
        <div className='home'>

            <p className="citiesChoose slogan">تميزنا في إقتناص الفرص السكنية و الإستثمارية المتميزة </p>
            <div className="citiesChoose">
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={()=>setActiveCity('capital')}>العاصمة الإدارية</BootstrapButton>
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={()=>setActiveCity('alameen')}> العلمين الجديدة</BootstrapButton>
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} > القاهرة الجديدة</BootstrapButton>
            </div>

        {activeCity !== 'capital' ?
            <div className="alameen">
            <img src={alameenMap} className='mapImage mapImage2' />
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>مقدمة عن مدينة العلمين الجديدة</h1>
                <p className='homeInfo__paragraph'>مدينة العلمين الجديدة هى مدينة متكاملة فى قلب الساحل الشمالى الغرب يتم تنفيذها على مساحة 48  الف فدان،وبمشاركة 15 ألف عامل و21 شركة مقاولات وباستثمارات تصل الى 40 مليار جنيه باشراف جهاز مدينة العلمين الجديدة،  والمدينة بمثابة رسالة للعالم اجمع ان اماكن الحرب اصبحت مناطق تنمية فى مصر.</p>
            </div>

            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                  لأحدث عروض العقارات السكنية المتنوعة  <Link to={`${lang}/residential`}  className="homeOffer__adLink"> اضغط هنا</Link>
                </p>
            </div>

            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>المنطقة الشاطئية</h1>
                <p className='homeInfo__paragraph'> كما بدأ تنفيذ 1120 وحدة سكنية بالمنطقة الشاطئية « الداون تاون» ، وكذلك عمارات وفيلات المنطقة الشاطئية السياحية بالاشتراك مع جهاز الخدمة الوطنية بمساحة 300 فدان بجوار منطقة البحيرات وسيتم طرح هذه الوحدات والفيلات للبيع فى عام 2018 . </p>
            </div>
            <img src={alameenPic1} className='mapImage mapImage2' />
            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                    لمشاهدة عروضنا الخاصة بالعيادات الطبية <Link to={`${lang}/clinics`}  className="homeOffer__adLink"> اضغط هنا</Link>
                </p>
            </div>
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>منطقة الابراج</h1>
                <p className='homeInfo__paragraph'> وتم البدء فى تنفيذ منطقة الابراج التى تضم 15 برجا بارتفاع 100 متر فوق سطح البحر بتكلفة 28 مليار جنيه وتتميز هذه المنطقة بوقوعها على شاطىء البحر المتوسط وتعد بمثابة ارقى موقع بالمدينة حيث تقع ايضا على الممشى الترفيهى الذى يتم تنفيذه بعرض 25 مترا مربعا وطول 14 كيلو مترا مقسم على مراحل تم الانتهاء من 700 متر منه ويتخلله ساحات للتجمعات ومنطقة ملاعب وباقى المرحلة العاجلة للممشى سيتم الانتهاء منها فى ابريل 2018 بطول 7 كم وتضم حارة للعجل بخرسانة خاصة واكبر جراج بالمدينة ومكان انتظار ونزول للشاطىء لذوى الاحتياجات الخاصة .  وامام منطقة الابراج يقع المجمع التجارى الترفيهى على البحر مباشرة ويضم 40 مبنى يتخلله 3 مشايات للكورنيش ويشمل وسائل الترفيه مثل النافورات والسينمات والملاهى والكافيهات ومقرات للبنوك . </p>
            </div>

            <img src={alameenPic2} className='mapImage mapImage2' />
            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                     فرص إستثمارية متميزة في المكاتب الإدارية <Link to={`${lang}/administrative`}  className="homeOffer__adLink"> من هنا</Link>
                </p>
            </div>
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>6 بحيرات متصلة</h1>
                <p className='homeInfo__paragraph'> وتضم المدينة 6 بحيرات متصلة بمساحة 1700 فدان بالشواطىء الداخلية ويتم حاليا تكسية جوانب البحيرات بمعرفة اكبر 3 شركات متخصصة فى هذا المجال بجانب اعمال التكريك والتطهير بتكلفة مليار ونصف جنيه وجار اعمال تصميم الميناء الداخلى بتكلفة نصف مليار جنيه كما سيتم انشاء ألسنة حماية بتكلفة مليار جنيه . </p>
            </div>
            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                    إطلع  علي عروضنا الخاصة بالمشاريع التجارية <Link to={`${lang}/commercial`}  className="homeOffer__adLink"> من هنا</Link>
                </p>
            </div>
           
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>جامعة العلمين الجديدة الاهلية </h1>
                <p className='homeInfo__paragraph'> يتم حاليا اعداد المخططات التفصيلية لجامعة العلمين الجديدة الاهلية من خلال وزارة التعليم العالى بمساحة 60 فدانا ويتم حاليا تنفيذ الطرق المحيطة بها ومن المقرر ان تضم كليات للسياحة والفنادق ومختلف التخصصات الاخرى التى تناسب البيئة الساحلية بمطروح كما توجد مفاوضات مع جامعات اخرى لتنفيذ مقرات لها بالمدينة وسيكون على رأسها الجامعة الاماراتية، أما منطقة الابحاث فهى ملحقة بالجامعة على مساحة 400 فدان . </p>
            </div>
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>المنطقة الصناعية </h1>
                <p className='homeInfo__paragraph'> وتقع المنطقة الصناعية على مساحة 8 آلاف فدان وتضم صناعة البتروكيماويات نظرا لقربها من ميناء الحمراء الخاص بتصدير البترول وبالقرب من الميناء الجاف المختص بنقل الحبوب من منطقة المليون ونصف المليون فدان وخاصة منطقة المغرة الزراعية كما تضم المنطقة صناعات الملح الجبلى والتعدين والصناعات التكميلية للتشييد ، كما توجد منطقة صناعية على مساحة 80 فدانا خاصة بشركة بتروجيت. </p>
            </div>
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'> الطريق البديل للطريق الساحلى </h1>
                <p className='homeInfo__paragraph'> ويتم انشاء الطريق البديل للطريق الساحلى الحالى وتم الانتهاء من المرحلة الاولى منه بطول 38 كيلو مترا بتكلفة 600 مليون جنيه ويبدأ من تقاطع طريق وادى النطرون العلمين قبل بوابة الرسوم فى اتجاه الغرب حتى سيدى عبدالرحمن بعرض 5 حارات لكل اتجاه بخلاف حارتى الخدمة. </p>
            </div>
            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                   متوفر أيضا صيدليات في مواقع مميزة  <Link to={`${lang}/pharmacies`}  className="homeOffer__adLink"> من هنا  </Link>
                </p>
            </div>
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>المنطقة الثقافية </h1>
                <p className='homeInfo__paragraph'> وتضم المنطقة التاريخية والفنادق التى تقع على مساحة 3500 فدان المعظمة الالمانية التى يوجد بها رفات الجنود الالمان اثناء الحرب العالمية الثانية وكذلك المعظمة الايطالية والمدفون بها 14 الف جندى وتتم سنويا اقامة احتفالات بها ويأتى اليها السياح من جميع انحاء العالم وخصوصا الالمان والايطاليين وسيتم قريبا طرح انشاء مجموعة فنادق عالمية بهذه المنطقة. </p>
            </div>
        </div>
            :
            <div className='admCapital' >
            <img src={capitalMap} className='mapImage' />
            
            <div className='capitalVideo' >
            <ReactPlayer width={window.innerWidth*0.9} height={window.innerWidth*0.9*0.56}  url="https://www.youtube.com/watch?v=NTbdwMATGSI" />
            </div>
            <div className='homeInfo__container'>
                <h1 className='homeInfo__title'>مقدمة عن العاصمة الإدارية الجديدة</h1>
                <p className='homeInfo__paragraph'>تعد العاصمة الإدارية الجديدة من المشروعات السكنية المميزة والتي أعلنت عنها الحكومة المصرية، وقد يتم عقد اجتماعات مجلس الوزراء ورئيس الوزراء ووزير الإسكان والتعمير، فلابد من التعرف على خريطة العاصمة الإدارية الجديدة</p>
                <p className='homeInfo__paragraph' > لقد غيرت العاصمة الإدارية الجديدة مفهوم الاستثمار العقاري حيث فتحت آفاق جديدة للاستثمار والتنمية العمرانية، حيث تتجه إلى الحصول على مستقبل أفضل وحياة أفضل لجميع كل ما يسكن بها. </p>
            </div>

            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                  لأحدث عروض العقارات السكنية المتنوعة  <Link to={`${lang}/residential`}  className="homeOffer__adLink"> اضغط هنا</Link>
                </p>
            </div>

            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'>مميزات العاصمة الإدارية الجديدة</h2>
                <p className='homeInfo__paragraph' >تعد العاصمة الإدارية الجديدة من المشروعات الحديثة والكبيرة التي تم تنفيذها مؤخرا في الشرق الأوسط ، حيث يوجد بها جميع وسائل الرفاهية والمتعة، كما تتميز بالعديد من المميزات التي جعلتها من المشروعات الحديثة الناجحة:</p>
                <ul className='homeInfo__list' >
                    <li className='homeInfo__point'>تم إنشاء المرحلة الأولى على مساحة 40 ألف فدان، وتستوعب ما يزيد عن 7 مليون مواطن.</li>
                    <li className='homeInfo__point'>تميز الشوارع في العاصمة الإدارية الجديدة بإتساعها، حيث يصل عرض الشارع إلى 120 متر.</li>
                    <li className='homeInfo__point'>ضم العاصمة الإدارية الجديدة مقرات الهيئات الحكومية والوزرات، وذلك لأنه سوف يتم نقل 18 وزراة إليها.</li>
                    <li className='homeInfo__point'>هناك الكثير من الوحدات السكنية حيث تبدأ الوحدات من 100 متر إلى 180 متر مربع.</li>
                    <li className='homeInfo__point'>وجود مساحات كبيرة من لاند سكيب والتي صممت على الأنظمة المتطورة.</li>
                    <li className='homeInfo__point'>ضم العاصمة الإدارية الجديدة على أكبر حديقة مركزية على مستوى العالم.</li>
                    <li className='homeInfo__point'>تم إنشاء محطة توليد الكهرباء بطاقة تصل إلى 4800 ميجاوات.</li>
                </ul>
            </div>


            <img src={homeMonoreel2} className='mapImage' />

            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                    لمشاهدة عروضنا الخاصة بالعيادات الطبية <Link to={`${lang}/clinics`}  className="homeOffer__adLink"> اضغط هنا</Link>
                </p>
            </div>

            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'>خدمات العاصمة الإدارية الجديدة</h2>
                <p className='homeInfo__paragraph' >تقدم العاصمة الإدارية الجديدة مجموعة من الخدمات والمرافق العامة التي يحتاجها جميع القاطنين بها، ومن هذه الخدمات:</p>
                <ul className='homeInfo__list' >
                    <li className='homeInfo__point'>يوجد بها مدينة ترفيهية مخصصة للأطفال .</li>
                    <li className='homeInfo__point'>وجود الكثير من الخدمات حيث يوجد لها 1250 مسجد، وكنيسة ومركز للمؤتمرات، وحوالى 600 منشاة طبية.</li>
                    <li className='homeInfo__point'>سوف يتم ربط مشروع العاصمة الإدارية الجديدة بخط سكة حديد مع خط شبكة السكك الحديدية.</li>
                    <li className='homeInfo__point'>يوجد بها أطول برج في أفريقيا.</li>
                    <li className='homeInfo__point'> يتم تنفيذ حوالي  أربعة آلاف وحدة سكنية فخمة ذات مساحات مختلفة. </li>
                    <li className='homeInfo__point'>يوجد بها أكبر مجمع حضاري في الشرق الأوسط.</li>
                    <li className='homeInfo__point'>يوجد بها مطار دولي و قطار كهربائي حتى يربط العاصمة الإدارية الجديدة بمدينتي السلام والعاشر من رمضان.</li>
                    <li className='homeInfo__point'>متحف خاص بالفنون المصرية.</li>
                    <li className='homeInfo__point'>متحف للشمع يضم تماثيل لكبار الشخصيات المصرية.</li>
                    <li className='homeInfo__point'>مدينة للفنون والثقافة تم تنفيذها على مساحة 127 فدان.</li>
                </ul>
                <p className='homeInfo__paragraph' > هذه المدينة من المدن الذكية الجديدة، حيث تمثل جسر حضاري يعمل على خلق كيان سياسي واقتصادي وثقافي في شمال أفريقيا وفي الشرق الاوسط،</p>
            </div>

            <img src={homeIconicTower1} className='mapImage' />

            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                     فرص إستثمارية متميزة في المكاتب الإدارية <Link to={`${lang}/administrative`}  className="homeOffer__adLink"> من هنا</Link>
                </p>
            </div>

            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'>أهم مشروعات العاصمة الإدارية الجديدة</h2>
                <ul className='homeInfo__list' >
                    <li className='homeInfo__point'>مشروع تنفيذ القطار الكهربائي، حيث تم الانتهاء من المرحلة الرابعة للخط الثالث للمترو، ويبلغ مساحة القطار الكهربائي 70كم.</li>
                    <li className='homeInfo__point'>مشروع الحدائق المركزية</li>
                    <p className='homeInfo__paragraph' >( كابيتال بارك)، حيث يقام هذا المشروع على مساحة 10 كم وسوف يتم تقسيمها من الغرب إلى الشرق إلى 3 قطاعات تخطيطية متكاملة. </p>
                    <li className='homeInfo__point'>مسجد الفتاح العليم</li>
                    <p className='homeInfo__paragraph' >يقع هذا المسجد على الطريق الدائري الأوسط، كما أنه يعد من أكبر المساجد في العالم، وعدد القباب به 21 قبة، والمساحة الإجمالية له تبلغ 106 فدان، ويساع المسجد حتى 17000 شخص.</p>
                    <li className='homeInfo__point'>أول جامعة أجنبية في العاصمة الإدارية الجديدة، حيث صدر قرار بإنشاء جامعة تسمى ( الجامعات الكندية في مصر)، حيث يوجد بهذه الجامعة مجموعة من الخدمات مثل كرة السلة والتنس وكرة القدم.</li>
                </ul>
            </div>

            <img src={newCapImg} className='mapImage mapImage2' />

            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                    إطلع  علي عروضنا الخاصة بالمشاريع التجارية <Link to={`${lang}/commercial`}  className="homeOffer__adLink"> من هنا</Link>
                </p>
            </div>

            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'>معلومات عن العاصمة الإدارية الجديدة</h2>
                <p className='homeInfo__paragraph' >تعد خريطة العاصمة الإدارية الجديدة ، من المشروعات الضخمة في العاصمة الإدارية الجديدة، وأن اختيار هذا الموقع يتميز بالحيوية والاستراتيجية ذات مقاييس ومعايير عالمية، حيث تم إطلاق العاصمة الإدارية الجديدة حيث أنها تمثل صورة متطورة لتنمية ودعم الاقتصاد المصري.</p>
                <p className='homeInfo__paragraph' >قد تم اختيار موقع العاصمة الإدارية الجديدة بكل عناية ودقة بالغة حتى تصبح من المدن المتطورة، فقد جاء هذا المشروع ليحل مشكلة ازدحام المدن سواء من السكان أو من المناطق الحكومية، حيث أن جميع الشوارع غير ملوثة وجميعها تتسم بالنظافة والجمال.</p>
            </div>

            <div className="homeOffer__adContainer">
                <p className="homeOffer__adText" >
                   متوفر أيضا صيدليات في مواقع مميزة  <Link to={`${lang}/pharmacies`}  className="homeOffer__adLink"> من هنا  </Link>
                </p>
            </div>
        </div>
        }
            
             
            
            

            <div className='homeCall__container'>
            <div className='homeCall__titleContainer' >
                <h2 className='homeInfo__title'>اتصل بنا</h2>
                <AddIcCallIcon fontSize='large' className='homeCall__titleIcon'/>
            </div>
            <p className='homeInfo__paragraph' >Mobile:  <Link to={`${lang}/`} className='homeCall__tel'>  +9665651940279</Link></p>
            <p className='homeInfo__paragraph' >Mobile:  <Link to={`${lang}/`} className='homeCall__tel'>  +9665651940278</Link></p>
            </div>

            <h2 className='homeInfo__title formTitle'> طلب عرض أسعار / إستفسار</h2>
            <form className='homeForm__container'>
                <h5 className='homeMessage__dataTitle' >الإسم</h5>
                <input className='homeMessage__input'  value={name} onChange={(e)=>setName(e.target.value)} />
                <h5 className='homeMessage__dataTitle' >البريد الإليكتروني</h5>
                <input className='homeMessage__input'  value={email}  onChange={(e)=>setEmail(e.target.value)} />
                <h5 className='homeMessage__dataTitle' >رقم التواصل</h5>
                <input className='homeMessage__input'  value={contactNumber}  onChange={(e)=>setContactNumber(e.target.value)} />
                <h5 className='homeMessage__dataTitle' >الرسالة / الإستفسار </h5>
                <input className='homeMessage__input inputMessage' value={message}  onChange={(e)=>setMessage(e.target.value)} />
                <button className='homeForm__button' onClick={(e)=>handleMessage(e)} >إرسال</button>
            </form>
            <div className='footer'>
            <p className='footerText'>جميع الحقوق محفوظة لدى موقع  © DoctorNewProperty لعام 2021</p>
        </div>
        </div>
    )
}

export default Home


/*
<div className='homeInfo__container'></div>
<h2 className='homeInfo__title'></h2>
<p className='homeInfo__paragraph' ></h4>

<ul className='homeInfo__list' >
    <li className='homeInfo__point'></li>
</ul>

*/