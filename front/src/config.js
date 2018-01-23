const API = 'http://localhost:8888/notebooks/work/resources/';

const lessons = [
  {
    name: 'Detekcja narożników (Corner detection)',
    url: API + 'Corner%20detection.ipynb',
    simple: true,
    img: '/img/corner_detection.png',
    description: 'Pozwala na detekcję narożników za pomocą detektora Harrisa. Narożnikiem nazywane jest' +
    ' przecięcie się dwóch krawędzi',
  },
  {
    name: 'Detektor krawędzi Canny’ego (Canny edge detector)\n',
    url: API + 'Canny%20edge%20detector.ipynb',
    simple: true,
    img: '/img/canny.png',
    description: 'Filter Canny’ego to wielofazowy detektor krawędzi. Korzysta on z filtru bazowanego na pochodnej' +
    ' filtru Gaussowskiego w celu obliczenia intensywności gradientu. Filtr Gaussa redukuje efekty szumu w obrazie.' +
    ' Następnie, potencjalne krawędzie są sprowadzane do grubości 1 piksela oraz usuwane bądź zostawiane korzystając ' +
    'z histerezy i progowania na podstawie wielkości gradientu.',
  },
  {
    name: 'Transformacje geometryczne (Geometric transformations)\n',
    url: API + 'Geometric%20transformations.ipynb',
    simple: false,
    img: '/img/transformations.png',
    description: 'Biblioteka scikit-image wspiera obsługę następujących przekształceń geometrycznych:' +
    ' podobieństwa (similarity), transformacji afinicznej (affine transform), homograficznego (projective) ' +
    'oraz wielomianowego (polynomial). Transformacje geometryczne mogą zostać przeprowadzone za pomocą ' +
    'parametrów (skali, rotacji, translacji) lub za pomocą macierzy transformacji.\n',
  },
  {
    name: 'Wyrównywanie histogramu (Histogram Equalization)',
    url: API + 'Histogram%20Equalization.ipynb',
    simple: false,
    img: '/img/hist.png',
    description: 'Metoda wyrównywania histogramu polega na powiększeniu globalnego kontrastu obrazów poprzez ' +
    'rozciągnięcie wartości z niewielkiego zakresu sygnału opisującego obraz na zakres szerszy. Dzięki temu ' +
    'natężenia są lepiej dystrybuowane na histogramie, co pozwala zwiększyć kontrast we fragmentach o jego ' +
    'niskim poziomie. Wyrównywanie histogramu nie jest procesem skomplikowanym, gdyż nie wymaga podawania ' +
    'zewnętrznych parametrów do przetworzenia obrazu, jednak często powoduje powstawanie nierealistycznych ' +
    'efektów w fotografii.',
  },
  {
    name: 'Wieloblokowy Lokalny Wzorzec Binarny - klasyfikacja tekstur',
    url: API + 'Multi-Block%20Local%20Binary%20Pattern%20for%20texture%20classification.ipynb',
    simple: false,
    img: '/img/multi.png',
    description: 'Metoda MB-LBP jest rozwinięciem metody LBP - zamiast wartości pojedynczych pikseli używane są ' +
    'wartości zsumowanych bloków. Do obliczenia cech używanych jest 9 kwadratów jednakowych rozmiarów. Dla każdego ' +
    'kwadratu obliczana jest suma intensywności pikseli. Porównanie tych sum do wartości centralnego kwadratu ' +
    'wyznaczy odpowiednią cechę, podobnie jak w operacji na pikselach w metodzie LBP.'
  },
];

const jupyterInstructions = 'http://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Running%20Code.html';
const github = 'https://github.com/pkprzekwas/image-processing';
const docs = 'https://docs.google.com/document/d/1mgcYdpmy09oxmj8oHkPr4XUNFTPU2rySgVA-Rq-7Zp4';
const course = 'Metody klasyfikacji danych geoinformatycznych';
const topic = 'System prezentujący poglądowo różne metody przetwarzania i analizy obrazów';

export {
  lessons,
  jupyterInstructions,
  github,
  docs,
  topic,
  course,
};