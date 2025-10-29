import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Document {
  id: number;
  title: string;
  type: string;
  format: string;
  size: string;
  date: string;
  category: string;
}

const Index = () => {
  const documents: Document[] = [
    {
      id: 1,
      title: "ФГОС НОО: Требования к программе изучения родословной",
      type: "Нормативный документ",
      format: "PDF",
      size: "2.4 МБ",
      date: "2024",
      category: "normative"
    },
    {
      id: 2,
      title: "Концепция духовно-нравственного развития и воспитания",
      type: "Нормативный документ",
      format: "PDF",
      size: "1.8 МБ",
      date: "2023",
      category: "normative"
    },
    {
      id: 3,
      title: "Методика составления генеалогического древа",
      type: "Методическое пособие",
      format: "DOCX",
      size: "3.2 МБ",
      date: "2024",
      category: "theory"
    },
    {
      id: 4,
      title: "Теоретические основы изучения родословной в начальной школе",
      type: "Монография",
      format: "PDF",
      size: "5.6 МБ",
      date: "2023",
      category: "theory"
    },
    {
      id: 5,
      title: "Шаблоны для составления семейного альбома",
      type: "Шаблон",
      format: "ZIP",
      size: "12.4 МБ",
      date: "2024",
      category: "resources"
    },
    {
      id: 6,
      title: "Интерактивные игры для изучения истории семьи",
      type: "Методическая разработка",
      format: "PDF",
      size: "4.1 МБ",
      date: "2024",
      category: "resources"
    },
    {
      id: 7,
      title: "Программа внеурочной деятельности «Моя родословная»",
      type: "Учебная программа",
      format: "PDF",
      size: "2.9 МБ",
      date: "2024",
      category: "theory"
    },
    {
      id: 8,
      title: "Рабочая тетрадь юного генеалога",
      type: "Рабочая тетрадь",
      format: "PDF",
      size: "8.7 МБ",
      date: "2024",
      category: "resources"
    }
  ];

  const categories = [
    {
      id: "normative",
      title: "Нормативно-правовые документы",
      description: "Федеральные стандарты, концепции и нормативные акты по духовно-нравственному воспитанию",
      icon: "Scale"
    },
    {
      id: "theory",
      title: "Теория и методология",
      description: "Научные исследования, методические пособия и программы по изучению родословной",
      icon: "BookOpen"
    },
    {
      id: "resources",
      title: "Полезные ресурсы",
      description: "Практические материалы, шаблоны, игры и рабочие тетради для занятий",
      icon: "FolderOpen"
    }
  ];

  const stats = [
    { label: "Документов", value: "50+", icon: "FileText" },
    { label: "Методик", value: "25+", icon: "BookMarked" },
    { label: "Шаблонов", value: "15+", icon: "Layout" },
    { label: "Ресурсов", value: "30+", icon: "Archive" }
  ];

  const handleDownload = (doc: Document) => {
    console.log(`Downloading: ${doc.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Library" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-secondary">Изучение родословной</h1>
                <p className="text-sm text-muted-foreground">Образовательный портал для педагогов</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon name="User" size={16} />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-primary/5 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Методическая база для внеурочной деятельности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Библиотека материалов по изучению родословной
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Комплексная база нормативных документов, научных исследований и практических материалов 
              для организации внеурочной деятельности по изучению родословной в начальной школе
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <Icon name={stat.icon} className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="normative" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 mb-8 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white h-auto py-4 px-6 rounded-lg"
                  >
                    <div className="flex items-start gap-3 text-left">
                      <Icon name={category.icon} size={24} className="mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-base">{category.title}</div>
                        <div className="text-xs opacity-80 mt-1 hidden md:block">{category.description}</div>
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid gap-4 md:grid-cols-2 animate-fade-in">
                    {documents
                      .filter((doc) => doc.category === category.id)
                      .map((doc, index) => (
                        <Card
                          key={doc.id}
                          className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary animate-scale-in"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <CardTitle className="text-lg mb-2 leading-tight">{doc.title}</CardTitle>
                                <CardDescription className="flex items-center gap-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {doc.type}
                                  </Badge>
                                </CardDescription>
                              </div>
                              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Icon name="FileText" className="text-primary" size={24} />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Icon name="File" size={14} />
                                  {doc.format}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="HardDrive" size={14} />
                                  {doc.size}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Calendar" size={14} />
                                  {doc.date}
                                </span>
                              </div>
                            </div>
                            <Button
                              onClick={() => handleDownload(doc)}
                              className="w-full gap-2 bg-primary hover:bg-primary/90"
                            >
                              <Icon name="Download" size={16} />
                              Скачать материал
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center pb-8">
                <Icon name="Info" className="mx-auto mb-4 text-primary" size={48} />
                <CardTitle className="text-2xl mb-2">О проекте</CardTitle>
                <CardDescription className="text-base">
                  Образовательный портал для педагогов начальной школы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Данный портал создан для методической поддержки педагогов, занимающихся организацией 
                    внеурочной деятельности по изучению родословной с детьми младшего школьного возраста. 
                    Здесь собраны актуальные нормативные документы, научные исследования и практические материалы.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <Icon name="CheckCircle2" className="mx-auto mb-3 text-primary" size={32} />
                      <h3 className="font-semibold mb-2">Актуальность</h3>
                      <p className="text-sm text-muted-foreground">
                        Все материалы соответствуют ФГОС НОО
                      </p>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <Icon name="Users" className="mx-auto mb-3 text-primary" size={32} />
                      <h3 className="font-semibold mb-2">Доступность</h3>
                      <p className="text-sm text-muted-foreground">
                        Материалы доступны для скачивания
                      </p>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <Icon name="TrendingUp" className="mx-auto mb-3 text-primary" size={32} />
                      <h3 className="font-semibold mb-2">Обновление</h3>
                      <p className="text-sm text-muted-foreground">
                        Регулярное пополнение базы
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="Library" size={20} />
              <span>© 2024 Образовательный портал. Изучение родословной</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Mail" size={16} />
                Контакты
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="HelpCircle" size={16} />
                Помощь
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
