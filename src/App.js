
import './App.css';
import logo from './mars-logo.png';
import bg from './mars-bg.jpg';
import rover from './rover2.jpg';
import helicopter from './helicopter.jpg';
import samples from './return.jpg'; 
import colonist from './colonist.jpg'



function HamburgerMenu()
{
  return (
    <>
    
    </>
  );
} 

/*
  document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').style.display = 
    (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
  });*/

//============================================================================
function Navbar()
{
  return (
    
    <div class="bg-red-900 text-white">
      <HamburgerMenu />
      
      <ul class="flex">
      
      <li class="flex-1 mr-2">
      <a class="block border border-white rounded hover:border-gray-200 py-1.5" href="#">
    
      <img src={logo} alt="Logo" />
   

      </a>
      </li>
  <li class="flex-1 mr-2">
    <a class="text-2xl font-bold text-center block border border-white hover:bg-slate-500 py-3 rounded hover:border-gray-200" href="#mission">Миссия МАРС 2020</a>
  </li>
  <li class="flex-1 mr-2">
  <a class="text-2xl font-bold text-center block border border-white hover:bg-slate-500 py-3 border border-white rounded hover:border-gray-200" href="#rover">Марсоход</a>
  </li>
  <li class="flex-1 mr-2">
    <a class="text-2xl font-bold text-center block border border-white hover:bg-slate-500 py-3 border-white rounded hover:border-gray-200" href="#helicopter">Вертолет</a>
  </li>
  <li class="flex-1 mr-2">
    <a class="text-2xl font-bold text-center block border border-white hover:bg-slate-500 py-3 block border border-white rounded hover:border-gray-200" href="#samples">Возврат образцов</a>
  </li>
  <li class="text-center flex-1">
    <a class="text-2xl font-bold text-center block border border-white hover:bg-slate-500 py-3 block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Кодекс колониста</a>
  </li>
</ul>

    </div>
  );
}
//////////////////////////////////////////////////////////////////////////////////////////
function Body(props)
{
    return (
    <div class="border-solid border-2 border-red-900 max-w-md mx-auto  shadow-md overflow-hidden md:max-w-5xl bg-[#282c34]">
      <br />
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-96" src={bg} />
    </div>
    <div class="p-8" id="mission">
      
      <div class="uppercase tracking-wide text-lg text-white font-bold underline">Миссия Марс 2020</div>
      
      <p class="mt-2 text-white">Миссия МАРС 2020 является частью долгосрочой программы НАСА по ислледованию красной планеты. Основные цели программы:
      <li>Поиск признаков жизни на планете</li>
      
      <li> Исследовать климатические процессы планеты</li>
      <li> Исследовать геологию планеты и обнаружить потенциалные залежи полезных ископаемых</li>
      <li> Подготовиться к будущей колонизации планеты людьми</li>
      
      
      
      
      </p>
      <br />
      <button class="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      История миссии
      </button>
    </div>
  </div>
  <br />
  <hr color="red" />
  <br />

  <div class="md:flex" id="rover">
 
    <div class="p-8">
      
      <div class="uppercase tracking-wide text-lg text-white font-bold underline">Марсоход Perseverance</div>
    
      <p class="mt-2 text-white">Марсоход выполняет задачи по поиску признаков древнейшей жизни на планете, а также собирает образцы породы и почвы для возможного 
      возвращения образцов на Землю (совместный долгосрочный проект с Европейским космическим агенством)
      <li>Дата запуска: 30 июля 2020</li>
      
      <li>Посадка: 18 февраля 2021, кратер Джезиро, Марс</li>
      <li>Вертолет: Ingenuity</li>
      <li>Статус миссии: Активна</li>
      </p>
      <br />
      <button class="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Технические характеристики
      </button>
    </div>
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-96" src={rover} />
    </div>



  </div>
  <br />
  <hr />
  <br />

  <div class="md:flex" id="helicopter">
    <div class="md:shrink-0" id="helicopter">
      <img class="h-48 w-full object-cover md:h-full md:w-96" src={helicopter} />
    </div>
    <div class="p-8">
      <p id="helicopter"/>
      <div class="uppercase tracking-wide text-lg text-white font-bold underline">Вертолет Ingenuity</div>
      
      <p class="mt-2 text-white">Первый в истории беспилотный автоматизированный летательный аппарат для полетов в атмосфере другого небесного тела.
      <li>Дата запуска: 03 апреля 2021</li>
      <li>Дата последнего полета: 18 января 2024</li>
      <li>Суммарный налет: 72 рейса, более 17 км совокупно</li>
      <li>Масса: 1.8 кг</li>
      <li>Питание: 6 элементов Sony VTC4 емкостью 35,75 Вт*ч, мощность 350 Вт, время подзарядки более суток</li>      
      <li>Статус: Операции прекращены в связи с повреждением несущих лопастей в январе 2024 г.</li>
      
      </p>
      <br />
      <button class="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Технические характеристики
      </button>
    </div>
  </div>
  <br />
  <hr />
  <br />

  <div class="md:flex">
    
    <div class="p-8" id="samples">
      
      <div class="uppercase tracking-wide text-lg text-white font-bold underline">Возврат образцов на Землю</div>
      
      <p class="mt-2 text-white">Планируемая, совместно с Европейским космическим агенством, операция по возвращению на Землю образцов, собранных марсоходом
      
      <li>Образцы: Запечатаны в титановые колбы-тубусы и находятся на борту марсохода</li>
      <li>Процедура перегрузки образцов из марсохода: Марсоход доставит образцы к стартовой площадке и погрузит их в грузовой отсек орбитальной ракеты</li>
      <li>Процедура вывода образцов на орбиту: Орбитальная ракета выводит образцы на устойчивую орбиту Марса</li>
      <li>Процедура отгрузки образцов на межпланетный транспорт: Орбитальной ракете предстоит состыковаться с межпланетным транспортом, загрузить в него образцы, сойти с орбиты и сгореть в атмосфере</li>
      <li>Вовзрат на Землю: Межпланетный транспорт достигнет орбиты Земли через полтора года полета и приземлится в акватории Тихого океана</li>
      </p>
      <br />
      <button class="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Технические характеристики
      </button>
    </div>
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-96" src={samples} />
    </div>

  </div>
  <br />
  <hr />
  <br />

  <div class="md:flex">
  <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-96" src={colonist} />
    </div>
    <div class="p-8">
      
      <div class="uppercase tracking-wide text-lg text-white font-bold underline">Записаться в колонисты</div>
      
      <form class="w-full max-w-lg align-middle">
  <div class="flex flex-wrap -mx-3 mb-6 align-middle justify-center">
 

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        Фамилия
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Петров" />
     
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Имя
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Иван" />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">
        Номер медицинского полиса
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  placeholder="0019293123812487" />
    
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
        Город
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Евпатория" />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
        Область
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Республика Крым</option>
          <option>Краснодарский край</option>
          <option>Самарская область</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
        Возраст
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="30" />
    </div>
  </div>
</form>
      <div class="justify-items-center">
        <br />
      <button class="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        
      Отправить заявку
      </button>
      <br />
      <br />
      <button class="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded onclick='alert('Изв')'">
      Отправить тещу на Марс
      </button>
      <br />
      
    

      </div>

    </div>
   
  </div>
  <hr />

 <h1 class="uppercase tracking-wide text-lg text-white font-bold underline"> Moroz Illia 2024 </h1>

</div>




);
}


function App() {
  return (
    <div className="App">

      <Navbar />
      <Body />
      <header className="App-header">
      </header>
      </div>
     

  
  );
}



export default App;
