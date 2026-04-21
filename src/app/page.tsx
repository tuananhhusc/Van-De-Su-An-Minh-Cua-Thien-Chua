import ProgressBar from '@/components/ProgressBar';
import TableOfContents from '@/components/TableOfContents';
import HeroSection from '@/components/HeroSection';
import ScrollAnimator from '@/components/ScrollAnimator';
import ThemeToggle from '@/components/ThemeToggle';
import BackToTop from '@/components/BackToTop';
import MetaBar from '@/components/MetaBar';
import Image from 'next/image';

/* --- Interactive citation component --- */
function Cite({ n, tip }: { n: number; tip?: string }) {
  const ref = references.find(r => r.id === n);
  return (
    <span className="cite-ref-wrapper relative inline-block group" tabIndex={0}>
      <a href="#nguon-trich-dan" className="cite-ref">
        [{n}]
      </a>
      {/* Tooltip: Fixed bottom floating panel on mobile, absolute tooltip on desktop */}
      <span className="fixed bottom-6 left-4 right-4 md:absolute md:bottom-full md:left-1/2 md:right-auto md:-translate-x-1/2 md:mb-3 md:w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
        <span className="block bg-parchment-warm rounded-lg shadow-xl shadow-navy/10 border border-border-subtle p-4 text-left">
          <span className="flex items-center gap-2 mb-2 pb-2 border-b border-border-subtle/50">
            <span className="text-dons-red font-bold font-sans text-xs flex-shrink-0">TÀI LIỆU #[{n}]</span>
            {tip && <span className="text-gold-muted font-sans text-xs truncate">- {tip}</span>}
          </span>
          <span className="block font-serif text-sm text-ink mb-2 leading-relaxed">
            {ref?.text}
          </span>
          {ref?.url && (
            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="font-sans text-[0.7rem] text-navy hover:text-dons-red break-all transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              Truy cập nguồn
            </a>
          )}
          {/* Arrow (Desktop only) */}
          <span className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-parchment-warm border-r border-b border-border-subtle rotate-45"></span>
        </span>
      </span>
    </span>
  );
}

/* --- Section divider --- */
function Divider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="text-gold-muted text-lg">✦</span>
    </div>
  );
}

/* --- References data --- */
const references = [
  { id: 1, text: 'Hiddenness of God - Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/divine-hiddenness/' },
  { id: 2, text: 'Divine Hiddenness and Human Reason (pt. 1) - r/DebateReligion', url: 'https://www.reddit.com/r/DebateReligion/comments/2pgzus/' },
  { id: 3, text: 'St. John of the Cross & The Dark Night - Catholic Exchange', url: 'https://catholicexchange.com/st-john-cross-dark-night/' },
  { id: 4, text: 'Divine Hiddenness Argument - Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/divine-hiddenness-argument-against-gods-existence/' },
  { id: 5, text: 'My Experience with John of the Cross\' Dark Night - Soul Shepherding', url: 'https://www.soulshepherding.org/my-experience-with-john-of-the-cross-dark-night-of-the-soul/' },
  { id: 6, text: 'The Hiddenness Argument - Notre Dame Philosophical Reviews', url: 'https://ndpr.nd.edu/reviews/the-hiddenness-argument-philosophys-new-challenge-to-belief-in-god/' },
  { id: 7, text: 'Divine Hiddenness and the Demographics of Theism - Maitzen', url: 'https://philosophy.acadiau.ca/tl_files/sites/philosophy/resources/documents/Maitzen_Hiddenness.pdf' },
  { id: 8, text: 'Why are you a Christian? - r/Christianity', url: 'https://www.reddit.com/r/Christianity/comments/17cm4tb/' },
  { id: 9, text: 'Divine Hiddenness - Cambridge University Press', url: 'https://www.cambridge.org/core/elements/divine-hiddenness/01818DB3E70AE4A39981630B9BD4A112' },
  { id: 10, text: 'Skeptical Theism - Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/skeptical-theism/' },
  { id: 11, text: 'Skeptical Theism (Winter 2022) - Stanford Encyclopedia', url: 'https://plato.stanford.edu/archives/win2022/entries/skeptical-theism/' },
  { id: 12, text: 'Skeptical Theism and Skepticism - Cambridge Core', url: 'https://www.cambridge.org/core/journals/royal-institute-of-philosophy-supplements/' },
  { id: 13, text: 'Skeptical Theism and Empirical Unfalsifiability - ePLACE', url: 'https://place.asburyseminary.edu/cgi/viewcontent.cgi?article=2346&context=faithandphilosophy' },
  { id: 14, text: 'The Image of the Invisible God - Todd Decker', url: 'https://tcdecker.com/2021/06/28/the-image-of-the-invisible-god/' },
  { id: 15, text: 'Summa Theologiae: How God is known by us (Q. 12) - New Advent', url: 'https://www.newadvent.org/summa/1012.htm' },
  { id: 16, text: 'Analogy as Theophany and the Hiddenness of God - Christendom Media', url: 'https://media.christendom.edu/1993/10/study-in-aquinas-analogy-as-theophany-and-the-hiddenness-of-god/' },
  { id: 17, text: 'Where Is God? The Problem of Divine Hiddenness - Word on Fire', url: 'https://www.wordonfire.org/articles/fellows/where-is-god-the-problem-of-divine-hiddenness/' },
  { id: 18, text: 'Sự ẩn mình của Thiên Chúa có là lý do để khước từ Ngài? - Dòng Tên', url: 'https://dongten.net/su-an-minh-cua-thien-chua-co-la-ly-do-de-khuoc-tu-ngai/' },
  { id: 19, text: 'Divine Hiddenness and Middle Knowledge - Scholars Crossing', url: 'https://digitalcommons.liberty.edu/cgi/viewcontent.cgi?article=1204&context=eleu' },
  { id: 20, text: 'Divine Faith, Human Faith - The Russell Kirk Center', url: 'https://kirkcenter.org/reviews/divine-faith-human-faith/' },
  { id: 21, text: 'Faith: Historical Perspectives - Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/faith-re/' },
  { id: 22, text: 'For the Bible tells me so? Faith and Evidence - Union Publishing', url: 'https://www.unionpublishing.org/resource/for-the-bible-tells-me-so/' },
  { id: 23, text: 'Blaise Pascal: 8 Deep Thoughts - Simply Nondual', url: 'https://simplynondual.com/blaise-pascal-8-thoughts-reason-and-spirituality' },
  { id: 24, text: 'Divine Disclosure and Concealment - New Blackfriars', url: 'https://www.cambridge.org/core/journals/new-blackfriars/' },
  { id: 25, text: 'Divine Hiddenness: New Essays - STAI Babussalam', url: 'https://staibabussalamsula.ac.id/wp-content/uploads/2024/01/Divine-Hiddenness-staibabussalamsula.ac_.id_.pdf' },
  { id: 26, text: 'The Hidden Footprints of God - John Templeton Foundation', url: 'https://www.templeton.org/news/the-hidden-footprints-of-god' },
  { id: 27, text: 'Thiên Chúa qua cảm nghiệm của các nhà thần bí - Dân Viện Phước Lý', url: 'https://danvienphuocly.com/thuong-huan/thien-chua-qua-cam-nghiem-cua-cac-nha-than-bi-tieu-bieu-2810.html' },
  { id: 28, text: 'Dark Night of the Soul PDF - Saint Patrick Basilica', url: 'https://basilica.ca/documents/2016/10/St.%20John%20of%20the%20Cross-Dark%20night%20of%20the%20soul.pdf' },
  { id: 29, text: 'The Dark Night of the Soul - Poetry Foundation', url: 'https://www.poetryfoundation.org/poems/157984/the-dark-night-of-the-soul' },
  { id: 30, text: 'St. John of the Cross - Dark Night (Full Text) - Saints\' Books', url: 'https://www.saintsbooks.net/books/St.%20John%20of%20the%20Cross%20-%20Dark%20Night%20of%20the%20Soul.pdf' },
  { id: 31, text: 'Orthodoxy on Divine Hiddenness - r/DebateReligion', url: 'https://www.reddit.com/r/DebateReligion/comments/174tvtz/' },
  { id: 32, text: 'The Problem of Divine Hiddenness After Pascha - Eclectic Orthodoxy', url: 'https://afkimel.wordpress.com/2019/05/06/the-problem-of-divine-hiddenness-it-even-gets-worse-after-pascha/' },
  { id: 33, text: 'We Deserve It: An Augustinian Response - New Blackfriars', url: 'https://www.cambridge.org/core/journals/new-blackfriars/' },
  { id: 34, text: '[Christians] Divine Hiddenness - r/DebateAChristian', url: 'https://www.reddit.com/r/DebateAChristian/comments/jwis0q/' },
  { id: 35, text: 'Toàn văn Thông Điệp Lumen Fidei - muoiman.net', url: 'https://muoiman.net/index.php/vi/news/TAI-LIEU-VAN-KIEN/' },
  { id: 36, text: 'Thông Điệp Ánh Sáng Đức Tin (Lumen Fidei) - Vietnamese Missionaries', url: 'https://vntaiwan.catholic.org.tw/13news/13news0517.htm' },
  { id: 37, text: 'C. S. Lewis on Divine Hiddenness - Anglican Theological Review', url: 'http://www.anglicantheologicalreview.org/wp-content/uploads/2020/02/dumsday_97.1.pdf' },
  { id: 38, text: 'C.S. Lewis\' Argument from Desire - BioLogos', url: 'https://discourse.biologos.org/t/c-s-lewis-argument-from-desire/53322/90' },
  { id: 39, text: 'The Argument from Desire - r/DebateReligion', url: 'https://www.reddit.com/r/DebateReligion/comments/6b3p1h/' },
  { id: 40, text: 'Faith as Divine Gift or Human Response? - SciELO', url: 'https://scielo.org.za/scielo.php?script=sci_arttext&pid=S0259-94222025000100049' },
  { id: 41, text: 'Suy Niệm Lời Chúa - Giáo Phận Bà Rịa', url: 'https://www.giaophanbaria.org/' },
];

export default function HomePage() {
  return (
    <>
      <ProgressBar />
      <ScrollAnimator />
      <ThemeToggle />
      <BackToTop />

      <HeroSection />
      
      {/* Read Time & Share Bar */}
      <MetaBar />

      {/* Main content area */}
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12 xl:gap-14">
          {/* Table of Contents */}
          <div className="w-[260px] xl:w-[280px] shrink-0 hidden lg:block">
            <TableOfContents />
          </div>

          {/* Article body */}
          <main className="min-w-0 flex-1 py-8 lg:py-12">
            <article className="article-prose max-w-[46rem] w-full mx-auto lg:mr-auto lg:ml-0">

              {/* =========================================
                  SECTION 1: DẪN NHẬP
                  ========================================= */}
              <section id="dan-nhap" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">1.</span>
                  Dẫn Nhập: Sự Ẩn Mình Của Thiên Chúa Giữa Trải Nghiệm Hiện Sinh Và Thách Thức Nhận Thức Luận
                </h2>

                <p>
                  Thuật ngữ &ldquo;<em className="term-highlight">sự ẩn mình của Thiên Chúa</em>&rdquo; (<em className="latin-phrase">Divine Hiddenness</em>) đề cập đến một thực trạng sâu sắc và đa chiều trong lịch sử tư tưởng nhân loại, nơi Thượng Đế được cho là đang ẩn giấu, vắng mặt hoặc giữ im lặng trước thế giới thụ tạo và trước những nỗ lực nhận thức của con người.<Cite n={1} tip="Stanford Encyclopedia of Philosophy" /> Trong suốt chiều dài lịch sử của các truyền thống tôn giáo lớn, sự tĩnh lặng này đã làm nảy sinh những thao thức hiện sinh mãnh liệt. Các văn bản Hebrew cổ đại thường xuyên cất lên những lời than trách về việc Thiên Chúa dường như không hiện diện trong kinh nghiệm của họ, không can thiệp vào những nỗi đau khổ của dân tộc, hoặc dường như ngoảnh mặt làm ngơ trước những lời cầu xin khẩn thiết.<Cite n={1} />
                </p>

                <p>
                  Trong truyền thống Kitô giáo, trải nghiệm này đạt đến đỉnh điểm qua tiếng kêu gào thấu tận trời xanh của Chúa Giêsu trên thập giá: <em>&ldquo;Lạy Thiên Chúa của con, sao Ngài bỏ rơi con?&rdquo;</em>.<Cite n={1} /> Trải nghiệm về sự vắng bóng này cũng được chia sẻ bởi vô số các nhà thần bí, các vị thánh và những tín hữu bình thường trong mọi truyền thống hữu thần, mà đỉnh cao của sự khốn cùng tâm linh thường được mô tả là &ldquo;<em className="latin-phrase">đêm tối của linh hồn</em>&rdquo;.<Cite n={1} /> Đối với những người có niềm tin, sự ẩn mình tạo ra một cuộc khủng hoảng hiện sinh nội tại, một thử thách thanh luyện đức tin.
                </p>

                <p>
                  Tuy nhiên, bước vào bối cảnh triết học tôn giáo hiện đại, đặc biệt là từ sau sự ra đời của công trình mang tính bước ngoặt <em className="latin-phrase">Divine Hiddenness and Human Reason</em> (1993) của triết gia <span className="philosopher-name">J.L. Schellenberg</span>, khái niệm &ldquo;sự ẩn mình của Thiên Chúa&rdquo; đã chuyển dịch từ một vấn đề hiện sinh nội bộ của người tin sang một thách thức nhận thức luận trực tiếp nhắm vào sự tồn tại của Thượng Đế.<Cite n={1} tip="Stanford Encyclopedia" /> Trong khuôn khổ triết học phân tích đương đại, sự ẩn mình được định nghĩa lại là sự thiếu vắng niềm tin vào Thiên Chúa của những người có khả năng và mong muốn tin, từ đó tạo thành một bằng chứng logic nhằm bác bỏ sự tồn tại của Ngài.<Cite n={1} />
                </p>

                <p>
                  Khảo luận này sẽ phân tích một cách toàn diện, cặn kẽ và đa chiều câu hỏi: <strong>Sự ẩn mình của Thiên Chúa có thực sự là lý do chính đáng để khước từ Ngài?</strong> Bằng cách đi sâu vào cấu trúc lập luận diễn dịch của chủ nghĩa vô thần hiện đại, các phản biện từ triết học tôn giáo, cũng như những kiến giải sâu sắc từ truyền thống kinh viện của <span className="philosopher-name">Thomas Aquinas</span>, nhãn quan hiện sinh của <span className="philosopher-name">Blaise Pascal</span>, thần học thần bí của <span className="philosopher-name">Thánh Gioan Thánh Giá</span> và lăng kính Thần học phủ định của Chính Thống Giáo, báo cáo này sẽ chứng minh rằng sự ẩn mình không tất yếu dẫn đến sự khước từ.
                </p>

                {/* Comparison Table */}
                <div className="academic-table-wrapper my-8">
                  <table className="academic-table">
                    <thead>
                      <tr>
                        <th>Khía Cạnh</th>
                        <th>Vấn Đề Hiện Sinh (Thần Học Tâm Linh)</th>
                        <th>Vấn Đề Triết Học (Nhận Thức Luận &amp; Phân Tích)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bản chất vấn đề</td>
                        <td>Cảm giác bị bỏ rơi, sự khô khan và trống rỗng trong đời sống cầu nguyện<Cite n={1} /></td>
                        <td>Sự tồn tại của những người không có niềm tin dù không cố ý chối bỏ<Cite n={1} /></td>
                      </tr>
                      <tr>
                        <td>Đối tượng trải nghiệm</td>
                        <td>Tín hữu, các nhà thần bí, các thánh nhân<Cite n={1} /></td>
                        <td>Người vô tín, triết gia, nhà tư tưởng hoài nghi<Cite n={1} /></td>
                      </tr>
                      <tr>
                        <td>Câu hỏi cốt lõi</td>
                        <td>Tại sao TC im lặng khi con người đang khao khát Ngài?<Cite n={3} /></td>
                        <td>Nếu TC yêu thương hoàn hảo, tại sao Ngài không làm cho mọi người biết Ngài tồn tại?<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Mục tiêu giải quyết</td>
                        <td>Thanh tẩy tình yêu, đạt đến sự kết hiệp sâu nhiệm<Cite n={3} /></td>
                        <td>Đánh giá tính hợp lý của niềm tin hữu thần so với chủ nghĩa tự nhiên<Cite n={1} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 2: SCHELLENBERG
                  ========================================= */}
              <section id="schellenberg" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">2.</span>
                  Thách Thức Triết Học Đương Đại: Lập Luận Từ Sự Vô Tín Không Kháng Cự Của J.L. Schellenberg
                </h2>

                <p>
                  Trong giới triết học tôn giáo đương đại, không một học giả nào định hình cuộc tranh luận về sự ẩn mình của Thiên Chúa sâu sắc và có hệ thống hơn <span className="philosopher-name">J.L. Schellenberg</span>. Lập luận của ông, thường được gọi là &ldquo;<em className="latin-phrase">lập luận từ sự vô tín không kháng cự</em>&rdquo; (<em>argument from nonresistant nonbelief</em>), được giới học thuật xem là một trong những thách thức mạnh mẽ nhất đối với chủ nghĩa hữu thần cổ điển.<Cite n={1} /> Nó được nhiều nhà tư tưởng đánh giá là có sức nặng triết học ngang bằng, thậm chí vượt trội hơn so với &ldquo;vấn đề cái ác&rdquo; (<em className="latin-phrase">problem of evil</em>) truyền thống.<Cite n={8} />
                </p>

                {/* 2.1 */}
                <div id="cau-truc-lap-luan" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">2.1.</span>
                    Cấu Trúc Lập Luận Diễn Dịch Và Các Tiền Đề Cốt Lõi
                  </h3>

                  <p>
                    Lập luận của Schellenberg nhắm trực tiếp vào khái niệm Thiên Chúa của các tôn giáo độc thần phương Tây - một Đấng tối thượng, một ngôi vị hoàn hảo (<em className="latin-phrase">perfect person</em>) sở hữu sự toàn hảo về quyền năng, tri thức, tính sáng tạo và đặc biệt là tình yêu.<Cite n={4} /> Cấu trúc logic của lập luận này được trình bày dưới dạng diễn dịch (<em className="latin-phrase">deductive argument</em>) với mục tiêu chứng minh rằng chủ nghĩa hữu thần không thể tồn tại một cách hợp lý.<Cite n={9} />
                  </p>

                  <div className="bg-parchment-warm/60 rounded-lg p-6 my-6 border border-border-subtle/50">
                    <p className="font-sans text-sm font-semibold text-navy mb-3 uppercase tracking-wide">Cấu trúc lập luận:</p>
                    <ol className="list-none space-y-3 text-base">
                      <li className="flex gap-3">
                        <span className="font-sans text-sm font-bold text-dons-red shrink-0 mt-0.5">P1:</span>
                        <span>Tất yếu, nếu một Thiên Chúa tồn tại, thì Ngài là một hữu thể vị ngẫu hoàn hảo.<Cite n={9} /></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-sans text-sm font-bold text-dons-red shrink-0 mt-0.5">P2:</span>
                        <span>Tất yếu, nếu Thiên Chúa là một hữu thể vị ngẫu hoàn hảo, thì Ngài luôn yêu thương tất cả con người một cách hoàn hảo.<Cite n={9} /></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-sans text-sm font-bold text-dons-red shrink-0 mt-0.5">P3:</span>
                        <span>Tất yếu, nếu TC yêu thương con người hoàn hảo, thì Ngài luôn cởi mở và sẵn sàng thiết lập một mối tương quan vị ngẫu (<em className="latin-phrase">personal relationship</em>) với bất kỳ hữu thể hữu hạn nào có khả năng tham gia.<Cite n={6} /></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-sans text-sm font-bold text-dons-red shrink-0 mt-0.5">P4:</span>
                        <span>Nếu có một TC luôn cởi mở với mối tương quan vị ngẫu, thì sẽ không có bất kỳ hữu thể hữu hạn nào rơi vào tình trạng &ldquo;vô tín không kháng cự&rdquo; (<em className="latin-phrase">nonresistant nonbelief</em>).<Cite n={6} /></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-sans text-sm font-bold text-dons-red shrink-0 mt-0.5">P5:</span>
                        <span>Trên thực tế, có những người có khả năng thiết lập mối quan hệ cá nhân với TC nhưng lại không thể tin vào sự tồn tại của Ngài, dù họ không có lỗi trong việc này.<Cite n={1} /></span>
                      </li>
                      <li className="flex gap-3 pt-2 border-t border-border-subtle/50">
                        <span className="font-sans text-sm font-bold text-navy shrink-0 mt-0.5">KL:</span>
                        <span className="font-semibold">Do đó, không tồn tại một Thiên Chúa vị ngẫu yêu thương hoàn hảo.<Cite n={1} /></span>
                      </li>
                    </ol>
                  </div>

                  <p>
                    Schellenberg định nghĩa một &ldquo;người vô tín không kháng cự&rdquo; là một cá nhân: (i) không hề cố ý kháng cự lại Thiên Chúa, (ii) có khả năng tham gia vào một mối quan hệ nhận thức có ý nghĩa với Thiên Chúa, nhưng (iii) lại không tin rằng Thiên Chúa tồn tại.<Cite n={4} /> Ông lập luận rằng, vì một mối quan hệ vị ngẫu đòi hỏi phải có niềm tin vào sự tồn tại của đối phương như một điều kiện tiên quyết mang tính logic, một Thiên Chúa yêu thương sẽ làm mọi cách để đảm bảo rằng bất cứ ai có khả năng và không kháng cự đều sẽ tin.<Cite n={2} />
                  </p>

                  <p>
                    Hơn nữa, Schellenberg nhấn mạnh đến khái niệm &ldquo;<em className="term-highlight">bằng chứng mang tính xác suất</em>&rdquo; (<em className="latin-phrase">probabilifying evidence</em>).<Cite n={9} /> Ông khẳng định rằng niềm tin vào sự tồn tại của Thiên Chúa là một trạng thái vô thức (<em className="latin-phrase">involuntary</em>); một người chỉ có thể tin nếu họ được cung cấp những bằng chứng làm cho mệnh đề &ldquo;Thiên Chúa tồn tại&rdquo; trở nên có khả năng đúng cao hơn là sai.<Cite n={9} /> Việc thiếu vắng những bằng chứng này đối với những người chân thành tìm kiếm chính là cốt lõi của sự ẩn mình.<Cite n={9} />
                  </p>
                </div>

                {/* 2.2 */}
                <div id="phan-bo-niem-tin" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">2.2.</span>
                    Sự Phân Bố Của Niềm Tin Và Chủ Nghĩa Tự Nhiên
                  </h3>

                  <p>
                    Củng cố thêm cho lập luận của Schellenberg, các triết gia như <span className="philosopher-name">Stephen Maitzen</span> và <span className="philosopher-name">Theodore Drange</span> đã phát triển các lập luận quy nạp (<em className="latin-phrase">inductive arguments</em>) nhắm vào &ldquo;nhân khẩu học của niềm tin hữu thần&rdquo; (<em className="latin-phrase">demographics of theism</em>).<Cite n={4} /> Maitzen quan sát thấy sự phân bố của đức tin trên toàn cầu là cực kỳ không đồng đều và phụ thuộc nặng nề vào các yếu tố địa lý, văn hóa.<Cite n={7} /> Theo Maitzen và <span className="philosopher-name">Jason Marsh</span>, chủ nghĩa tự nhiên (<em className="latin-phrase">naturalism</em>) cung cấp một lời giải thích mạch lạc hơn nhiều cho sự phân bố nhân khẩu học này so với chủ nghĩa hữu thần.<Cite n={1} />
                  </p>

                  <p>
                    Tương tự, Theodore Drange sử dụng &ldquo;khối lượng khổng lồ của sự vô tín&rdquo; như một bằng chứng quy nạp chống lại khái niệm Thiên Chúa trong Kitô giáo Tin Lành giáo phái Phúc Âm.<Cite n={4} /> Đối với Schellenberg và những người ủng hộ, kết quả của việc kiểm tra xem liệu ý niệm về một Thiên Chúa vị ngẫu có thể tồn tại hợp lý hay không là rất rõ ràng: nó không thể.<Cite n={9} /> Điều này đã thôi thúc Schellenberg từ bỏ khuôn khổ hữu thần truyền thống và dành các công trình sau này để tìm kiếm các hình thức tôn giáo phi hữu thần (<em className="latin-phrase">non-theistic religion</em>).<Cite n={9} />
                  </p>
                </div>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 3: PHẢN BIỆN
                  ========================================= */}
              <section id="phan-bien" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">3.</span>
                  Phản Biện Từ Thần Học Triết Học: Giải Mã Lập Luận Của Schellenberg
                </h2>

                <p>
                  Để phản bác lại lập luận diễn dịch sắc bén về sự ẩn mình, các triết gia hữu thần buộc phải tấn công vào một trong hai tiền đề cốt lõi: hoặc là phủ nhận &ldquo;tiền đề hiện sinh&rdquo; (cho rằng sự vô tín không kháng cự thực sự xảy ra), hoặc là phủ nhận &ldquo;tiền đề bất tương thích&rdquo; (cho rằng sự tồn tại của TC không thể dung hòa với sự vô tín không kháng cự).<Cite n={4} />
                </p>

                {/* 3.1 */}
                <div id="phu-nhan-vo-tin" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">3.1.</span>
                    Phủ Nhận Sự Tồn Tại Của &ldquo;Sự Vô Tín Không Kháng Cự&rdquo;
                  </h3>

                  <p>
                    Triết gia <span className="philosopher-name">Ebrahim Azadegan</span> đưa ra luận điểm về &ldquo;<em className="term-highlight">ảnh hưởng noetic của tội lỗi</em>&rdquo; (<em className="latin-phrase">noetic effects of sin</em>).<Cite n={4} /> Theo thần học truyền thống, tội lỗi không chỉ là các hành vi sai trái về mặt luân lý mà còn là một trạng thái bản thể làm suy yếu và làm sai lệch năng lực nhận thức của nhân loại.<Cite n={4} /> Do bản tính con người đã bị tổn thương bởi tội nguyên tổ và các tội cá nhân, khả năng nhận thức sự hiện diện của Thiên Chúa bị che khuất.<Cite n={4} /> Azadegan lập luận rằng không có sự vô tín nào là thực sự &ldquo;không có lỗi&rdquo; (<em className="latin-phrase">inculpable</em>), bởi lẽ tội lỗi đã xâm nhập sâu vào các cấu trúc nhận thức.
                  </p>

                  <p>
                    Tiếp nối hướng đi này, triết gia <span className="philosopher-name">Paul Moser</span> lập luận rằng đức tin không đơn thuần là sự chấp nhận một mệnh đề triết học (<em className="latin-phrase">propositional belief</em>) mà là một hình thức tình bạn với Thiên Chúa, mang một &ldquo;<em className="term-highlight">yếu tố ý chí không thể giản lược</em>&rdquo; (<em className="latin-phrase">irreducible volitional component</em>).<Cite n={4} /> Moser khẳng định Thiên Chúa không có động lực để cung cấp cho con người &ldquo;niềm tin mệnh đề thuần túy&rdquo; nếu thành phần ý chí cần thiết cho một mối tương quan cá nhân yêu thương bị vắng mặt.<Cite n={4} />
                  </p>

                  <p>
                    Bên cạnh đó, học giả <span className="philosopher-name">M. Andrews</span> lập luận dựa trên dữ liệu tâm lý học về khả năng &ldquo;dự báo cảm xúc&rdquo; (<em className="latin-phrase">affective forecasting</em>) của con người.<Cite n={4} /> Những người vô tín cho rằng họ sẽ phản ứng tích cực nếu có bằng chứng về Thiên Chúa có thể đang đánh giá sai phản ứng thực sự của mình.<Cite n={4} /> Những kỳ vọng của con người về cách Thiên Chúa &ldquo;nên&rdquo; hiển lộ thường không đáng tin cậy và mang nặng tính chủ quan.<Cite n={4} />
                  </p>
                </div>

                {/* 3.2 */}
                <div id="kha-nang-tuong-quan" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">3.2.</span>
                    Khả Năng Tương Quan Mà Không Cần Niềm Tin Mệnh Đề
                  </h3>

                  <p>
                    Triết gia <span className="philosopher-name">Andrew Cullison</span> đưa ra một ví dụ giả định sâu sắc về mối quan hệ tình cảm trực tuyến giữa hai nhân vật &ldquo;Bob&rdquo; và &ldquo;Julie&rdquo;.<Cite n={4} /> Khi Bob phát hiện ra rằng công nghệ máy tính hiện đại có khả năng tạo ra các chương trình mô phỏng giao tiếp hoàn hảo, anh ta bắt đầu hoài nghi sâu sắc về sự tồn tại thực sự của Julie. Tuy nhiên, Bob vẫn duy trì các tương tác trực tuyến vì anh giữ lại một tia hy vọng.<Cite n={4} /> Cullison lập luận rằng nếu một mối quan hệ chân thành có thể tồn tại giữa con người dựa trên <strong>hy vọng</strong> thay vì sự xác tín, thì mối tương quan giữa con người và Thiên Chúa cũng có thể được duy trì qua hy vọng dù thiếu vắng niềm tin vững chắc.<Cite n={4} />
                  </p>

                  <p>
                    Ở một khía cạnh khác, triết gia <span className="philosopher-name">Terence Cuneo</span> cho rằng con người có thể vô tình trải nghiệm Thiên Chúa thông qua việc trải nghiệm cái đẹp và trật tự của thế giới vật chất.<Cite n={4} /> Dựa trên phân đoạn Phúc Âm Matthew 25:34-40 (<em>&ldquo;những gì các ngươi làm cho một trong các anh em bé mọn nhất của Ta đây, là các ngươi đã làm cho chính Ta&rdquo;</em>), Cuneo nhấn mạnh rằng sự phục vụ người khác chính là sự tương tác với Thượng Đế.<Cite n={4} /> Do đó, Thiên Chúa không nhất thiết phải buộc mọi người phải biết về Ngài để có thể thiết lập mối quan hệ với Ngài.
                  </p>
                </div>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 4: THIỆN ÍCH LỚN HƠN
                  ========================================= */}
              <section id="thien-ich" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">4.</span>
                  Luận Điểm Về Những Thiện Ích Lớn Hơn (The Greater Goods Defense)
                </h2>

                <p>
                  Chiến lược phổ biến, toàn diện và có sức nặng nhất của các nhà tư tưởng hữu thần là luận điểm về &ldquo;<em className="term-highlight">thiện ích lớn hơn</em>&rdquo; (<em className="latin-phrase">Greater Goods Defense</em>). Cách tiếp cận này cho rằng Thiên Chúa chủ động cho phép sự vô tín xảy ra vì điều đó mang lại một thiện ích cao cả hơn, hoặc ngăn chặn một hậu quả tiêu cực tồi tệ hơn.<Cite n={4} />
                </p>

                {/* Greater Goods Table */}
                <div className="academic-table-wrapper my-8">
                  <table className="academic-table">
                    <thead>
                      <tr>
                        <th style={{ width: '22%' }}>Loại Thiện Ích</th>
                        <th style={{ width: '18%' }}>Triết Gia Tiêu Biểu</th>
                        <th>Phân Tích Lập Luận Cốt Lõi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sự Trưởng Thành Tâm Linh &amp; Khao Khát</td>
                        <td><span className="philosopher-name">Sarah Coakley, Robert Lehe</span></td>
                        <td>TC ẩn mình để gia tăng lòng khao khát Ngài. Sự khao khát trong bóng tối kích thích sự tìm kiếm sâu sắc và trưởng thành tâm linh.<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Thực Hành Nhân Đức Hy Vọng</td>
                        <td><span className="philosopher-name">Aaron Cobb</span></td>
                        <td>Hy vọng chỉ có thể tồn tại trong trạng thái không chắc chắn. Sự ẩn mình cung cấp không gian nhận thức cần thiết để tôi luyện nhân đức hy vọng.<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Sự Hy Sinh Vị Tha Chân Thật</td>
                        <td><span className="philosopher-name">Andrew Cullison</span></td>
                        <td>Nếu mọi người đều chắc chắn tuyệt đối về TC công bằng, các hành động hy sinh sẽ biến thành sự &ldquo;giao dịch&rdquo; mang tính toán thay vì lòng vị tha chân chính.<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Bảo Vệ Quyền Tự Trị &amp; Không Gian Riêng Tư</td>
                        <td><span className="philosopher-name">Kirk Lougheed</span></td>
                        <td>Dưới cái nhìn liên tục và hiển nhiên của một Đấng Toàn Năng, con người sẽ cảm thấy bị giám sát tột độ. Ngài ẩn mình để bảo vệ quyền tự trị.<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Tránh Sự Cưỡng Ép Nhận Thức</td>
                        <td><span className="philosopher-name">Michael J. Murray</span></td>
                        <td>Một sự hiển lộ uy nghi, không thể chối cãi sẽ mang tính cưỡng ép nhận thức, áp đảo hoàn toàn tự do ý chí.<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Duy Trì Khoảng Cách Nhận Thức Luận</td>
                        <td><span className="philosopher-name">John Hick</span></td>
                        <td>Trong khuôn khổ &ldquo;thần học kiến tạo linh hồn&rdquo; (<em className="latin-phrase">soul-making theodicy</em>), con người cần &ldquo;khoảng cách nhận thức&rdquo; với TC để thế giới thực sự là môi trường thử thách đạo đức.<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Sự Phụ Thuộc Tương Hỗ Trong Xã Hội</td>
                        <td><span className="philosopher-name">Max Baker-Hytch</span></td>
                        <td>TC muốn con người phụ thuộc vào nhau trong việc truyền đạt chân lý thiêng liêng, tạo ra sự đoàn kết cộng đồng.<Cite n={4} /></td>
                      </tr>
                      <tr>
                        <td>Phát Triển Ý Nghĩa Khác Biệt</td>
                        <td><span className="philosopher-name">Kevin Vandergriff</span></td>
                        <td>Những người không có cơ hội biết TC trong quá khứ lại đóng góp vào sự phát triển lịch sử của các khái niệm tôn giáo cho thế hệ sau.<Cite n={1} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Những luận điểm trên minh họa một sự cân bằng tinh tế trong chương trình hành động của Thiên Chúa. Sự ẩn mình của Ngài không phải là sự hờ hững hay bất lực, mà là một <em className="term-highlight">phương cách sư phạm siêu việt</em>. Nó buộc nhân loại phải tự thân phát triển các giá trị đạo đức độc lập, tránh biến đức tin thành một sự tuân phục cơ học dưới sức ép của những bằng chứng áp đảo.
                </p>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 5: THẦN HỌC HOÀI NGHI
                  ========================================= */}
              <section id="than-hoc-hoai-nghi" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">5.</span>
                  Chủ Nghĩa Thần Học Hoài Nghi Và Giới Hạn Của Nhận Thức Nhân Loại
                </h2>

                <p>
                  Một tuyến phòng thủ triết học sắc bén khác là <em className="term-highlight">Chủ nghĩa Thần học Hoài nghi</em> (<em className="latin-phrase">Skeptical Theism</em>), được phát triển mạnh mẽ bởi các học giả uy tín như <span className="philosopher-name">Michael Bergmann</span>, <span className="philosopher-name">Stephen Wykstra</span>, <span className="philosopher-name">Justin McBrayer</span>, và <span className="philosopher-name">Philip Swenson</span>.<Cite n={4} />
                </p>

                <p>
                  Các nhà thần học hoài nghi lập luận rằng khoảng cách bản thể học và nhận thức luận giữa một Thiên Chúa toàn tri vô hạn và tâm trí con người hữu hạn là một <strong>vực thẳm không thể thu hẹp</strong>. Do đó, con người hoàn toàn không ở vị thế nhận thức đủ tốt để đánh giá liệu Thiên Chúa có lý do chính đáng nào để ẩn mình hay không.<Cite n={4} />
                </p>

                <p>
                  <span className="philosopher-name">Stephen Wykstra</span> đã đưa ra một phê phán mạnh mẽ đối với những lập luận vô thần dựa trên sự thiếu vắng, gọi chúng là lập luận &ldquo;<em className="latin-phrase">noseeum</em>&rdquo; (không-thấy-thì-không-có).<Cite n={12} /> Wykstra và Bergmann chỉ ra điểm yếu chí mạng: xác suất để tâm trí đơn sơ của chúng ta hiểu được sự phức tạp trong các chiến lược quản cai vũ trụ đa chiều của Thiên Chúa là cực kỳ thấp.<Cite n={10} />
                </p>

                <div className="article-blockquote">
                  Một đứa trẻ sơ sinh hoàn toàn không thể hiểu được lý do tại sao cha mẹ lại đưa chúng đến gặp bác sĩ để chịu một mũi tiêm đau đớn, nhưng sự không hiểu biết của đứa trẻ không phủ nhận sự tồn tại của một lý do y khoa sâu sắc. Tương tự, con người không thể nắm bắt được mạng lưới nhân quả khổng lồ trải dài qua lịch sử và các lý do đạo đức vĩ đại mà Đấng Tạo Hóa đang vận hành.
                  <cite>- Phép loại suy cha mẹ–đứa trẻ (<em className="latin-phrase">Parent Analogy</em>)</cite>
                </div>

                <p>
                  Mặc dù Chủ nghĩa Thần học Hoài nghi giải quyết rất thành công vấn đề triết học của sự ẩn mình (bằng cách vô hiệu hóa tiền đề cho rằng sự thiếu bằng chứng đồng nghĩa với việc vắng mặt Thiên Chúa), nó lại thường bị đánh giá là không mang lại sự thỏa mãn cho những ai đang phải đối mặt với vấn đề thần học hoặc hiện sinh.<Cite n={4} /> Dẫu vậy, về mặt logic thuần túy, Thần học hoài nghi bẻ gãy tính tất yếu trong kết luận suy diễn của Schellenberg.
                </p>
              </section>

              <Divider />

              {/* IMAGE 1: Aquinas/Scholasticism */}
              <figure className="my-14 fade-section">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-border-subtle shadow-md">
                   <Image src="/Van-De-Su-An-Minh-Cua-Thien-Chua/aquinas.png" alt="Thư viện kinh viện cổ đại" fill className="object-cover" />
                </div>
                <figcaption className="text-center mt-3 font-serif italic text-sm text-ink-muted px-4">
                  Trí tuệ kinh viện (Scholasticism) giữa ánh sáng siêu việt - Tranh phong cách cổ điển.
                </figcaption>
              </figure>

              {/* =========================================
                  SECTION 6: THOMAS AQUINAS
                  ========================================= */}
              <section id="aquinas" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">6.</span>
                  Truyền Thống Kinh Viện Và Vai Trò Của Lý Trí: Nhãn Quan Của Thomas Aquinas
                </h2>

                <p>
                  Đi ngược về dòng lịch sử triết học kinh viện, <span className="philosopher-name">Thánh Thomas Aquinas</span> đã đối diện với vấn đề sự ẩn mình và vô hình của Thiên Chúa thông qua một hệ thống nhận thức luận thần học tinh vi, nhấn mạnh sự tương tác giữa lý trí tự nhiên, ân sủng và sự tự do. Khác với phái vô thần hiện đại, Aquinas không coi sự vô hình của Thiên Chúa là một sự &ldquo;ẩn giấu&rdquo; mang tính lảng tránh, mà là một <em className="term-highlight">sự tất yếu về mặt bản thể học</em>.
                </p>

                {/* 6.1 */}
                <div id="ban-the-vo-hinh" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">6.1.</span>
                    Bản Thể Vô Hình Và Sự Hạn Chế Của Giác Quan
                  </h3>

                  <p>
                    Trong kiệt tác <em className="latin-phrase">Summa Theologiae</em> (Tổng Luận Thần Học), Câu hỏi 12, Điều 11, Aquinas đặt vấn đề về việc liệu con người trong cõi đời này có thể nhìn thấy bản thể (<em className="latin-phrase">essence</em>) của Thiên Chúa hay không.<Cite n={14} />
                  </p>

                  <div className="article-blockquote">
                    Thiên Chúa không thể được nhìn thấy trong bản thể của Ngài bởi một con người phàm trần, trừ khi người đó được tách khỏi cuộc sống sinh tử này.
                    <cite>- Thánh Thomas Aquinas, <em className="latin-phrase">Summa Theologiae</em>, I, Q.12, a.11</cite>
                  </div>

                  <p>
                    Nguyên lý nhận thức luận cốt lõi mà Aquinas dựa vào là: &ldquo;<em className="latin-phrase">phương thức nhận thức tuân theo phương thức của bản tính người nhận thức</em>&rdquo; (<em className="latin-phrase">the mode of knowledge follows the mode of the nature of the knower</em>).<Cite n={14} /> Tâm hồn con người, vốn bị ràng buộc vào thân xác vật lý và nhận thức thông qua các kinh nghiệm giác quan, không thể nắm bắt trực tiếp một bản thể thuần túy vô hạn và thiêng liêng.<Cite n={14} />
                  </p>

                  <p>
                    Thiên Chúa được nhìn thấy bởi <em className="latin-phrase">intellect</em> (trí năng), không phải bởi <em className="latin-phrase">sense</em> (giác quan).<Cite n={15} /> Sự ẩn mình về mặt thể lý của TC do đó không phải là một sự khiếm khuyết trong tình yêu, mà là sự vượt trội của &ldquo;chất thể thần linh&rdquo; (<em className="latin-phrase">divine substance</em>). Ngài luôn &ldquo;ẩn giấu&rdquo; trong ánh sáng chói lòa vượt ngoài sự hiểu biết thấu đáo của chúng ta.<Cite n={16} />
                  </p>
                </div>

                {/* 6.2 */}
                <div id="dau-vet" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">6.2.</span>
                    Nhận Biết Thiên Chúa Qua Dấu Vết (<em className="latin-phrase">Vestigia</em>) Và Trật Tự Tự Nhiên
                  </h3>

                  <p>
                    Dù Thiên Chúa vô hình trong bản thể, Aquinas kiên quyết bác bỏ ý nghĩ cho rằng con người bị bỏ mặc trong bóng tối nhận thức hoàn toàn. Dựa trên thư Romans 1:20 của Thánh Phaolô (<em>&ldquo;Từ khi tạo dựng vũ trụ, những đặc tính vô hình của Ngài... đã được nhận biết qua các tạo vật&rdquo;</em>), Aquinas lập luận rằng chúng ta không thể nhìn trực tiếp Thiên Chúa trong tự nhiên, nhưng ta có thể thấy &ldquo;dấu chân&rdquo; (<em className="latin-phrase">footprints</em>) hay các hệ quả (<em className="latin-phrase">effects</em>) từ sự sáng tạo của Ngài.<Cite n={17} />
                  </p>

                  <p>
                    Kế thừa di sản trí thức của <span className="philosopher-name">Aristotle</span> và <span className="philosopher-name">Plato</span>, Aquinas đã sử dụng lý trí để chứng minh sự tồn tại của Thiên Chúa thông qua &ldquo;<em className="term-highlight">Ngũ Đạo</em>&rdquo; (Năm Con Đường) nổi tiếng trong <em className="latin-phrase">Summa Theologiae</em> và <em className="latin-phrase">Summa contra gentiles</em>.<Cite n={17} /> Vũ trụ hữu hình này đòi hỏi một lời giải thích bên ngoài nó; những nguyên nhân tác thành, tính ngẫu nhiên của sự vật, và sự trật tự vĩ đại của vạn vật đều chỉ về một &ldquo;Nguyên nhân đầu tiên&rdquo; mang bóng dáng của Thượng Đế.<Cite n={17} />
                  </p>

                  <p>
                    Theo nhãn quan của Aquinas, lý trí độc lập hoàn toàn có thể dẫn dắt con người đến việc nhận biết sự tồn tại của Thiên Chúa.<Cite n={17} /> Lập luận này đã được <em>Công đồng Vatican I</em> xác nhận: con người có thể biết TC tồn tại chỉ thông qua lý trí.<Cite n={17} /> Tính tốt lành của sự tra vấn bằng lý trí được xem là một lý do giải thích tại sao TC ẩn mình: Ngài tôn trọng trí tuệ con người, muốn nhân loại sử dụng năng lực tư duy độc đáo của mình để suy luận, tìm kiếm và khám phá Ngài thông qua các công trình thụ tạo.<Cite n={17} />
                  </p>
                </div>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 7: KHỦNG HOẢNG NHẬN THỨC LUẬN
                  ========================================= */}
              <section id="khung-hoang-nhan-thuc" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">7.</span>
                  Giữa Bằng Chứng Và Đức Tin: Khủng Hoảng Nhận Thức Luận Hiện Đại
                </h2>

                <p>
                  <span className="philosopher-name">John Henry Newman</span> đã đưa ra những phân tích sắc bén nhằm phân biệt giữa &ldquo;<em className="term-highlight">đức tin nhân loại</em>&rdquo; (<em className="latin-phrase">human faith</em>) và &ldquo;<em className="term-highlight">đức tin thần linh</em>&rdquo; (<em className="latin-phrase">divine faith</em>).<Cite n={20} /> Newman nhận ra rằng đức tin nhân loại dựa trên việc chấp nhận sự đáng tin cậy của mặc khải thông qua một quá trình lý luận không chính thức (<em className="latin-phrase">informal reasoning process</em>), với đối tượng là chính các sự kiện mặc khải.<Cite n={20} /> Tuy nhiên, đức tin thần linh lại được thúc đẩy bởi ân sủng, và chấp nhận chân lý dựa trên thẩm quyền của chính Thiên Chúa.<Cite n={20} />
                </p>

                <p>
                  Sự trỗi dậy của chủ nghĩa kinh nghiệm (<em className="latin-phrase">empiricism</em>), tiêu biểu là <span className="philosopher-name">David Hume</span>, đã bác bỏ khả năng dùng thần học tự nhiên hoặc phép lạ để chứng minh đức tin.<Cite n={21} /> Hume cho rằng kinh nghiệm là chỉ nam duy nhất, và ta không thể suy luận ra một Nhà thiết kế chỉ từ trải nghiệm về thế giới.<Cite n={21} /> Trước những thách thức thực chứng này, các nhà thần học hiện đại nhận ra rằng không một bằng chứng vật lý hay văn bản nào có thể hoàn toàn thuyết phục được một tâm trí đã mặc định từ chối các tiền đề siêu nhiên.<Cite n={22} />
                </p>

                <p>
                  Việc Thiên Chúa ẩn mình, do đó, phản ánh một hiện thực nhận thức luận: <strong>đức tin không phải là kết quả của việc bị ép buộc bởi vô số dữ liệu khoa học, mà là một định hướng nền tảng của tâm hồn</strong>.
                </p>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 8: BLAISE PASCAL
                  ========================================= */}
              <section id="pascal" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">8.</span>
                  Nhãn Quan Hiện Sinh: Blaise Pascal, <em className="latin-phrase">Deus Absconditus</em>, Và Vực Thẳm Vô Hạn
                </h2>

                <p>
                  Khác với tiếp cận duy lý của Aquinas, triết gia kiêm toán học gia thế kỷ 17 <span className="philosopher-name">Blaise Pascal</span> mang đến một lời giải thích mang đậm tính hiện sinh và tâm lý học cho sự tĩnh lặng của Thiên Chúa thông qua khái niệm <em className="latin-phrase">Deus Absconditus</em> (Thượng Đế ẩn mình) trong tác phẩm <em className="latin-phrase">Pensées</em>.<Cite n={23} />
                </p>

                {/* 8.1 */}
                <div id="muc-dich-an-giau" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">8.1.</span>
                    Mục Đích Của Sự Ẩn Giấu: Tự Do Và Thử Thách
                  </h3>

                  <p>
                    Đối với Pascal, sự ẩn mình của TC không phải là một tai nạn hay sự vắng mặt, mà là một phần thiết yếu trong thiết kế sư phạm của Ngài nhằm phục vụ hai mục đích tối thượng: <strong>bảo vệ tự do ý chí</strong> của con người và <strong>thử thách đức tin</strong> chân chính.<Cite n={23} />
                  </p>

                  <div className="article-blockquote">
                    Ngài cung cấp đủ ánh sáng cho những ai khao khát muốn thấy Ngài, và đủ sự tối tăm cho những ai có khuynh hướng ngược lại.
                    <cite>- Blaise Pascal, <em className="latin-phrase">Pensées</em></cite>
                  </div>

                  <p>
                    Nếu Thiên Chúa xuất hiện một cách huy hoàng, rực rỡ và hiển nhiên thần thánh đến mức không ai có thể phủ nhận, con người sẽ bị tước đoạt hoàn toàn tự do lựa chọn.<Cite n={17} /> Khi đó, đức tin sẽ không còn là một hành động dâng hiến của tình yêu và sự tin tưởng, mà chỉ là sự ép buộc phải thừa nhận một sự thật cơ học không thể chối cãi.<Cite n={23} />
                  </p>
                </div>

                {/* 8.2 */}
                <div id="vuc-tham-tam-ly" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">8.2.</span>
                    Vực Thẳm Tâm Lý Và Sự Giác Ngộ
                  </h3>

                  <p>
                    Pascal lý giải sự ẩn mình thông qua trạng thái tâm lý sâu thẳm của nhân loại. Ông quan sát thấy con người luôn trải qua một cảm giác trống rỗng, bất lực và sự thèm khát (<em className="latin-phrase">craving</em>) vô độ.<Cite n={23} /> Cảm giác này, theo Pascal, chính là bằng chứng (<em className="latin-phrase">empty print and trace</em>) của một &ldquo;hạnh phúc đích thực&rdquo; mà con người từng sở hữu trong quá khứ nhưng nay đã đánh mất do sự sa ngã.<Cite n={23} />
                  </p>

                  <div className="article-blockquote">
                    Pascal mô tả tình trạng này như một &ldquo;<em>vực thẳm vô hạn</em>&rdquo; (<em className="latin-phrase">infinite abyss</em>) bên trong tâm hồn. Vì là một vực thẳm vô hạn, nó không thể được lấp đầy bởi những thú vui tạm bợ, quyền lực, danh vọng hay của cải vật chất hữu hạn, mà chỉ có thể được lấp đầy bởi một &ldquo;đối tượng vô hạn và bất biến&rdquo; - chính là Thiên Chúa.
                    <cite>- Blaise Pascal</cite>
                  </div>

                  <p>
                    Do đó, sự ẩn mình không phải là sự trừng phạt hay lý do để khước từ, mà là <em className="term-highlight">chất xúc tác để khơi dậy khát vọng truy tầm sâu thẳm nhất</em>, buộc con người phải đối mặt với bản ngã, vượt qua những cám dỗ hữu hạn của thế gian để tìm về cội nguồn vô hạn duy nhất có thể thỏa mãn họ.
                  </p>
                </div>
              </section>

              <Divider />

              {/* IMAGE 2: Dark Night */}
              <figure className="my-14 fade-section">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-border-subtle shadow-md">
                   <Image src="/Van-De-Su-An-Minh-Cua-Thien-Chua/dark_night.png" alt="Đêm tối của linh hồn" fill className="object-cover" />
                </div>
                <figcaption className="text-center mt-3 font-serif italic text-sm text-ink-muted px-4">
                  "Đêm tối của linh hồn": Một đan viện tĩnh lặng chìm trong ngàn sao - Tranh phong cách Lãng mạn.
                </figcaption>
              </figure>

              {/* =========================================
                  SECTION 9: ĐÊM TỐI CỦA LINH HỒN
                  ========================================= */}
              <section id="dem-toi" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">9.</span>
                  Thần Học Thần Bí: &ldquo;Đêm Tối Của Linh Hồn&rdquo; Và Sự Chiêm Niệm Thanh Tẩy
                </h2>

                <p>
                  Sự vắng mặt của Thiên Chúa không chỉ là chủ đề tranh luận của những người vô thần hay các triết gia, mà còn là một giai đoạn đau đớn nhưng mang tính sống còn trong hành trình tâm linh của chính những người tin sâu sắc nhất. <span className="philosopher-name">Thánh Gioan Thánh Giá</span> (St. John of the Cross), vị Tiến sĩ Hội Thánh và nhà thần bí dòng Carmelite thế kỷ 16, đã cung cấp một bản đồ chi tiết về sự tĩnh lặng này qua kiệt tác thơ ca và thần học <em className="latin-phrase">Đêm Tối Của Linh Hồn</em> (<em>Dark Night of the Soul</em>).<Cite n={3} />
                </p>

                {/* 9.1 */}
                <div id="chuyen-tiep-tam-linh" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">9.1.</span>
                    Sự Chuyển Tiếp Khỏi &ldquo;Thời Thơ Ấu Tâm Linh&rdquo;
                  </h3>

                  <p>
                    Theo Thánh Gioan, những người mới bước vào đời sống đạo thường trải nghiệm những &ldquo;<em>niềm an ủi thiêng liêng</em>&rdquo; (<em className="latin-phrase">spiritual consolations</em>), những xúc cảm ngọt ngào, các &ldquo;dấu hiệu&rdquo; tưởng chừng như từ Thiên Chúa.<Cite n={3} /> Trạng thái dễ chịu này được coi là &ldquo;<em className="term-highlight">thời thơ ấu tâm linh</em>&rdquo; (<em className="latin-phrase">spiritual infancy</em>).<Cite n={3} /> Tuy nhiên, để đạt đến sự kết hiệp hoàn toàn (<em className="latin-phrase">transforming union</em>) với Thiên Chúa trên đỉnh núi Carmêlô, linh hồn phải rũ bỏ sự phụ thuộc vào những cảm xúc phù du này.<Cite n={3} /> Khi đó, Thiên Chúa chủ động rút lại mọi cảm giác an ủi, đưa linh hồn vào một &ldquo;Đêm Tối&rdquo;.<Cite n={3} />
                  </p>

                  <p>
                    Trong giai đoạn này, khi tín hữu cầu nguyện, Thiên Chúa dường như &ldquo;câm lặng&rdquo; (<em>mute</em>).<Cite n={3} /> Niềm khao khát mãnh liệt muốn cảm nhận tình yêu của Ngài chỉ được đáp lại bằng một &ldquo;<em>sự tĩnh lặng lạnh lẽo, vô sinh</em>&rdquo; (<em className="latin-phrase">cold, sterile silence</em>).<Cite n={3} /> Linh hồn cảm thấy lạc lõng, cô độc, hoang mang tột độ và bị bao phủ bởi sự trống rỗng.<Cite n={3} />
                  </p>
                </div>

                {/* 9.2 */}
                <div id="toi-tam-giac-quan" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">9.2.</span>
                    Sự Tối Tăm Của Giác Quan Và Trí Tuệ (<em className="latin-phrase">Purgative Contemplation</em>)
                  </h3>

                  <p>
                    Quá trình này được gọi là &ldquo;<em className="term-highlight">chiêm niệm thanh tẩy</em>&rdquo; (<em className="latin-phrase">purgative contemplation</em>).<Cite n={3} /> Nó đòi hỏi Thiên Chúa phải chủ động làm tối tăm ý chí, trí tuệ và các giác quan của con người.<Cite n={3} /> Về mặt giác quan (<em className="latin-phrase">Night of Sense</em>), khả năng tự xoa dịu hay tìm kiếm sự bình an từ các phương pháp thực hành đạo đức cũ bị triệt tiêu hoàn toàn.<Cite n={3} /> Về mặt trí tuệ (<em className="latin-phrase">Night of Spirit</em>), những kiến thức học thuật bỗng chốc tan biến, nhường chỗ cho sự vỡ mộng và tình trạng &ldquo;không biết gì&rdquo; (<em className="latin-phrase">unknowing</em>).<Cite n={3} />
                  </p>

                  {/* Dark Night poem */}
                  <div className="poetry-blockquote my-10">
                    <p className="mb-1">Trong một đêm tối tăm</p>
                    <p className="mb-1">Với tình yêu âu lo bùng cháy</p>
                    <p className="mb-1">Ôi, số phận hạnh phúc!</p>
                    <p className="mb-1">Tôi bước đi không ai hay biết</p>
                    <p className="mb-4">Ngôi nhà tôi giờ đã yên nghỉ</p>
                    <p className="text-sm not-italic text-warm-gray font-sans">
                      - Thánh Gioan Thánh Giá, <em>Đêm Tối Của Linh Hồn</em><Cite n={29} />
                    </p>
                  </div>

                  <p>
                    Sự yên nghỉ của ngôi nhà chính là sự câm lặng của các đam mê trần thế và sự vô hiệu hóa các giác quan.<Cite n={29} /> Ánh sáng duy nhất dẫn đường không phải là trí tuệ trần gian hay ánh mặt trời rực rỡ, mà là ngọn lửa đốt cháy trong trái tim.<Cite n={29} />
                  </p>
                </div>

                {/* 9.3 */}
                <div id="an-du-mua-dong" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">9.3.</span>
                    Ẩn Dụ Về Mùa Đông Và Sự Phục Sinh Của Đức Tin
                  </h3>

                  <p>
                    Mục đích tối thượng của sự câm lặng đáng sợ này là tôi luyện linh hồn trong &ldquo;<em>lò luyện của sự tối tăm</em>&rdquo; (<em className="latin-phrase">crucible of darkness</em>).<Cite n={3} /> Nó ép buộc con người phải từ bỏ &ldquo;tình yêu có điều kiện&rdquo; (<em className="latin-phrase">conditional love</em>) - thứ tình yêu ích kỷ chỉ tồn tại khi lời cầu nguyện được nhậm lời - để tiến tới trạng thái trưởng thành: &ldquo;<em className="term-highlight">yêu Thiên Chúa vì chính Ngài</em>&rdquo; (<em className="latin-phrase">love God for His own sake</em>).<Cite n={3} />
                  </p>

                  <p>
                    Thánh Gioan sử dụng ẩn dụ về mùa đông. Bề ngoài, mặt đất mùa đông dường như cằn cỗi, xám xịt, lạnh lẽo và chết chóc.<Cite n={3} /> Tuy nhiên, sự sống và sự đổi mới thực chất không hề biến mất; nó đang âm thầm &ldquo;<em>ẩn giấu trong tử cung của lòng đất</em>&rdquo;.<Cite n={3} /> Giống như một hạt giống nảy mầm mạnh mẽ dưới lớp đất đóng băng, linh hồn đang đâm chồi nảy lộc với các nhân đức kiên nhẫn và khiêm nhường trong khi phải dò dẫm trong bóng tối.<Cite n={3} /> Chìa khóa duy nhất để vượt qua là sự &ldquo;<em className="term-highlight">trung tín</em>&rdquo; (<em className="latin-phrase">fidelity</em>), kiên nhẫn chờ đợi trong bóng tối bằng đức tin đơn thuần.<Cite n={3} />
                  </p>

                  <p>
                    Quả ngọt của đêm tối thanh tẩy là bốn lợi ích vĩ đại: <strong>sự bình an tuyệt vời</strong>, <strong>sự chú tâm liên tục hướng về Thiên Chúa</strong>, <strong>sự tinh sạch nội tâm</strong>, và <strong>sự thực hành nhân đức sâu sắc</strong>.<Cite n={3} />
                  </p>
                </div>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 10: CÁC LĂNG KÍNH TRUYỀN THỐNG
                  ========================================= */}
              <section id="lang-kinh-truyen-thong" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">10.</span>
                  Các Lăng Kính Truyền Thống Đức Tin: Sự Khác Biệt Giữa Đông Và Tây
                </h2>

                <p>
                  Mỗi truyền thống đức tin đều có cấu trúc kiến tạo thần học riêng để xử lý vấn đề Thiên Chúa ẩn mình. Điều này chỉ ra một điểm yếu lớn trong lập luận của Schellenberg: ông thường chỉ tấn công vào một khái niệm hữu thần kinh viện rất cụ thể của phương Tây, mà vô tình bỏ qua sự phong phú của toàn bộ nhãn quan Kitô giáo truyền thống và các tôn giáo phương Đông.<Cite n={4} />
                </p>

                {/* 10.1 */}
                <div id="than-hoc-phu-dinh" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">10.1.</span>
                    Thần Học Phủ Định (<em className="latin-phrase">Apophatic Theology</em>) Trong Chính Thống Giáo Đông Phương
                  </h3>

                  <p>
                    Học giả <span className="philosopher-name">Nick Trakakis</span> lập luận rằng các triết gia tôn giáo phương Tây đã phạm sai lầm khi nhân hóa (<em className="latin-phrase">anthropomorphize</em>) Thiên Chúa.<Cite n={4} /> Họ ngầm định rằng các thuộc tính của Ngài (như tình yêu, sự mở lòng, nhu cầu về một mối quan hệ có ý thức) có thể đo lường và so sánh trực tiếp với thuộc tính tâm lý của con người.<Cite n={4} />
                  </p>

                  <p>
                    Ngược lại, Chính Thống Giáo nhấn mạnh vào &ldquo;<em className="term-highlight">Thần học phủ định</em>&rdquo; (<em className="latin-phrase">Apophatic theology</em> hay <em className="latin-phrase">via negativa</em>).<Cite n={4} /> Theo nhãn quan này, Thiên Chúa là Đấng vượt việt vô lượng, hoàn toàn xa lạ với cấu trúc nhận thức và phạm trù logic của hữu thể thụ tạo. Ngài không chỉ đơn thuần là một &ldquo;hữu thể vĩ đại nhất&rdquo; nằm chung một thang bậc tồn tại với các hữu thể khác, mà là Đấng hoàn toàn khác biệt (<em className="latin-phrase">utterly different</em>).<Cite n={4} /> Tri thức của chúng ta về Thiên Chúa chủ yếu đạt được qua việc phủ nhận: chúng ta biết về Ngài qua những gì Ngài <em>không phải là</em>.<Cite n={31} />
                  </p>

                  <p>
                    Sự ẩn mình không phải là một &ldquo;vấn đề triết học&rdquo; lạnh lùng cần giải quyết bằng các tiền đề logic suy diễn, mà là một thực tại mầu nhiệm được cử hành sinh động trong Phụng Vụ (<em className="latin-phrase">Liturgy of St. John Chrysostom</em>), nơi nguyên lý <em className="latin-phrase">lex orandi, lex credendi</em> (luật cầu nguyện là luật đức tin) ngự trị.<Cite n={32} /> Chính Thống Giáo cũng nhấn mạnh rằng &ldquo;<strong>tình yêu đi trước chân lý</strong>&rdquo; trong chương trình cứu độ.<Cite n={31} />
                  </p>
                </div>

                {/* 10.2 */}
                <div id="quan-diem-cong-giao" className="mt-10">
                  <h3 className="subsection-heading text-xl md:text-2xl text-ink mb-5">
                    <span className="text-gold-muted font-sans text-sm font-bold mr-2">10.2.</span>
                    Quan Điểm Công Giáo: Đức Tin Ẩn Tàng Và Vô Tri Bất Khả Kháng
                  </h3>

                  <p>
                    Thần học Công Giáo giải quyết tình trạng vô tín không kháng cự thông qua các khái niệm về &ldquo;<em className="term-highlight">Sự Vô Tri Bất Khả Kháng</em>&rdquo; (<em className="latin-phrase">Invincible Ignorance</em>) và &ldquo;<em className="term-highlight">Đức Tin Ẩn Tàng</em>&rdquo; (<em className="latin-phrase">Implicit Faith</em>).<Cite n={33} /> Ngay cả khi một người không có nhận thức tri thức minh nhiên về Thiên Chúa do hoàn cảnh lịch sử, địa lý, hạn chế về năng lực trí tuệ, hoặc các rào cản tâm lý phức tạp, họ vẫn không bị kết án oan uổng.<Cite n={18} />
                  </p>

                  <p>
                    Thần học Công Giáo khẳng định rằng nếu những cá nhân này nỗ lực sống theo tiếng gọi của lương tâm ngay thẳng và thực thi các giá trị đạo đức, họ đang thực chất đón nhận ân sủng cứu độ một cách vô thức.<Cite n={33} /> Sự cứu rỗi không đạt được đơn thuần nhờ việc tích lũy các mệnh đề triết lý đúng đắn, mà là nhờ sự chấp nhận một cách tự do đối với món quà ân sủng.<Cite n={33} />
                  </p>

                  <p>
                    Đức Thánh Cha Phanxicô trong Thông điệp <em className="latin-phrase">Lumen Fidei</em> (Ánh sáng Đức tin) chỉ ra rằng lịch sử vô tín, chẳng hạn như việc người Do Thái tôn thờ con bê vàng thay vì chờ đợi TC trên núi Sinai, thực chất xuất phát từ việc họ &ldquo;<em>không thể chịu nổi thời gian chờ đợi để thấy dung nhan của Ngài nữa</em>&rdquo;.<Cite n={35} /> Đức tin chân chính đòi hỏi con người phải &ldquo;<em className="term-highlight">từ bỏ việc sở hữu lập tức</em>&rdquo; - tức là từ bỏ mong muốn kiểm soát Thượng Đế, từ bỏ sự chắc chắn tuyệt đối của lý trí để học cách kiên nhẫn mở lòng.<Cite n={35} />
                  </p>
                </div>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 11: C.S. LEWIS
                  ========================================= */}
              <section id="cs-lewis" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">11.</span>
                  Khát Vọng Tâm Linh Và Sự Siêu Việt: Lập Luận Của C.S. Lewis
                </h2>

                <p>
                  Sự vắng mặt của Thiên Chúa ở cõi trần gian lại được nhiều nhà tư tưởng xem là một chỉ báo mạnh mẽ về một thực tại siêu việt cao cả hơn. Đại diện tiêu biểu là <span className="philosopher-name">C.S. Lewis</span>, người đã phác họa điều này qua &ldquo;<em className="term-highlight">Lập luận từ sự khát khao</em>&rdquo; (<em className="latin-phrase">Argument from desire</em>) và &ldquo;<em className="term-highlight">Lập luận từ luật đạo đức</em>&rdquo; (<em className="latin-phrase">Moral law</em>).<Cite n={37} />
                </p>

                <p>
                  Lewis quan sát thấy một hiện tượng phổ quát: con người bẩm sinh mang trong mình những khát vọng mãnh liệt không thể được thỏa mãn bởi bất kỳ điều gì tồn tại trong trật tự tự nhiên hay thế giới vật lý này.<Cite n={37} /> Một người có thể đói và có thức ăn, khát và có nước, có nhu cầu tình dục và có bạn đời. Nhưng niềm khao khát về sự vĩnh cửu, về một ý nghĩa tuyệt đối và một niềm vui vượt ngoài mọi kinh nghiệm trần thế lại không có đối tượng tương ứng nào trong tự nhiên để lấp đầy.<Cite n={37} />
                </p>

                <div className="article-blockquote">
                  Nếu chúng ta thấy mình có một khát vọng mà không gì trên thế giới này có thể thỏa mãn, lời giải thích hợp lý nhất là chúng ta được tạo ra cho một thế giới khác.
                  <cite>- C.S. Lewis</cite>
                </div>

                <p>
                  Lewis phân tích sự tồn tại của quy luật đạo đức khách quan (<em className="latin-phrase">moral law</em>) - một hệ thống các quy tắc về đúng/sai mà con người cảm thấy bị ràng buộc nhưng không tự mình tạo ra, và cũng không thể giản lược thành các phản ứng tiến hóa sinh học thuần túy.<Cite n={37} /> Quy luật đạo đức này là &ldquo;<em>chỉ báo rõ ràng rằng có một thứ gì đó đằng sau thế giới vật lý, một thứ giống với tâm trí hơn là vật chất, vì chỉ có một thực thể mang tính tâm trí mới có thể là nguồn ban hành các chỉ thị đạo đức</em>&rdquo;.<Cite n={37} />
                </p>

                <p>
                  Sự ẩn mình của Thiên Chúa, trong bối cảnh phân tích của Lewis, là một sự &ldquo;ẩn mình&rdquo; tất yếu đối với thế giới vật lý hữu hình, nhưng lại <strong>hiển lộ một cách cực kỳ mạnh mẽ và vang dội thông qua sự thao thức khôn nguôi của tâm hồn con người và sức nặng của lương tâm</strong>. Sự tĩnh lặng của Thiên Chúa không phải là một vực thẳm trống rỗng và vô nghĩa, mà là một khoảng không vô tận vang vọng lời mời gọi con người bước ra khỏi cái nhìn duy vật chật hẹp để đi vào cõi siêu việt.
                </p>
              </section>

              <Divider />

              {/* =========================================
                  SECTION 12: KẾT LUẬN
                  ========================================= */}
              <section id="ket-luan" className="fade-section mb-12">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  <span className="text-dons-red font-sans text-base font-bold mr-2">12.</span>
                  Kết Luận
                </h2>

                <p>
                  Nghiên cứu về sự ẩn mình của Thiên Chúa bộc lộ một sự giao thoa phức tạp và sâu sắc giữa nhận thức luận triết học, thần học tâm linh, tâm lý học tôn giáo và các truyền thống giáo lý đa dạng. Mặc dù lập luận diễn dịch từ sự vô tín không kháng cự của <span className="philosopher-name">J.L. Schellenberg</span> cung cấp một thách thức sắc bén dựa trên tiền đề rằng một TC yêu thương hoàn hảo thì phải luôn hiển lộ để duy trì mối quan hệ vị ngẫu có ý thức<Cite n={4} />, sự phân tích toàn diện cho thấy tiền đề này mang tính quy giản.
                </p>

                <p>
                  Dựa trên các dữ kiện phân tích, <strong>sự ẩn mình của Thiên Chúa không phải là lý do chính đáng để khước từ Ngài</strong>, mà thực chất là một <em className="term-highlight">điều kiện bản thể học tất yếu</em> và một <em className="term-highlight">phương pháp sư phạm thần thánh</em> nhằm hoàn thiện nhân loại.
                </p>

                <div className="bg-parchment-warm/60 rounded-lg p-6 my-8 border border-border-subtle/50 space-y-4">
                  <div>
                    <p className="font-sans text-sm font-bold text-navy mb-1">Về mặt Triết lý và Đạo đức:</p>
                    <p className="text-base">Sự tĩnh lặng bảo vệ quyền tự trị nhận thức, tạo không gian thiết yếu cho sự tồn tại của nhân đức hy vọng. Nó bảo toàn giá trị vị tha tuyệt đối của sự hy sinh và lòng dũng cảm, vốn sẽ bị hủy hoại nếu bị chi phối bởi những tính toán phần thưởng.<Cite n={4} /></p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-navy mb-1">Về mặt Tri thức và Hiện sinh:</p>
                    <p className="text-base">Thông qua Thomas Aquinas và Blaise Pascal, con người có đủ &ldquo;dấu vết&rdquo; (<em className="latin-phrase">vestigia</em>) trong trật tự tự nhiên để suy luận về Thiên Chúa bằng năng lực lý trí.<Cite n={17} /></p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-navy mb-1">Về mặt Tâm linh và Thần bí:</p>
                    <p className="text-base">Kinh nghiệm &ldquo;Đêm tối của linh hồn&rdquo; minh định rằng sự vắng mặt của những cảm quan thiêng liêng là phương cách thanh tẩy tối ưu - một ca phẫu thuật tâm linh để cắt bỏ sự kiêu ngạo.<Cite n={3} /></p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-navy mb-1">Về mặt Thần học và Văn hóa:</p>
                    <p className="text-base">Sự bất khả thấu hiểu của TC trong Thần học phủ định<Cite n={4} />, cùng với nguyên lý đức tin như một sự đáp trả tự nguyện<Cite n={33} />, tái khẳng định rằng chân lý tối hậu không phải là một tập hợp các mệnh đề hiển nhiên.</p>
                  </div>
                </div>

                <p>
                  Tóm lại, nếu Thiên Chúa là Đấng siêu việt vô lượng, sự vắng mặt hiển nhiên của Ngài trong thế giới vật lý không chứng minh sự không tồn tại, mà là dấu ấn của một <em className="term-highlight">Tình Yêu Vĩ Đại hơn</em> - một tình yêu tự thu mình lại (<em className="latin-phrase">kenosis</em>) để thế giới thụ tạo có không gian tự do sinh trưởng, hoài nghi, tìm kiếm, yêu thương và cuối cùng, tự nguyện bước vào sự kết hiệp vĩnh cửu. Trớ trêu thay, chính trong sự ẩn mình tĩnh lặng tuyệt đối đó, sự tôn trọng và tình thương của Thiên Chúa đối với nhân phẩm con người lại được tỏ bày một cách trọn vẹn, tế nhị và hoàn hảo nhất.<Cite n={41} />
                </p>

                <div className="article-blockquote !border-l-gold !bg-gradient-to-r from-[rgba(255,200,69,0.06)] to-transparent">
                  Việc lấy sự vắng mặt tạm thời về mặt nhận thức làm lý do tuyệt đối để khước từ Ngài, về bản chất, chẳng khác nào ném bỏ một hạt giống tiềm năng vào giữa mùa đông giá lạnh chỉ vì không đủ kiên nhẫn chờ đợi để nhìn thấy bông hoa rực rỡ của mùa xuân. <strong>Đức tin, do đó, vươn lên không phải nhờ vào sự chắc chắn của bằng chứng, mà nhờ vào sức mạnh của hy vọng trong tâm điểm của sự ẩn mình.</strong>
                  <cite>- Kết luận của khảo luận</cite>
                </div>
              </section>

              <Divider />

              {/* =========================================
                  REFERENCES
                  ========================================= */}
              <section id="nguon-trich-dan" className="fade-section mb-16">
                <h2 className="section-heading text-2xl md:text-3xl text-ink mb-6">
                  Nguồn Trích Dẫn
                </h2>

                <div className="space-y-0">
                  {references.map((ref) => (
                    <div key={ref.id} className="reference-item">
                      <span className="ref-number">[{ref.id}]</span>
                      <span>{ref.text}, </span>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">
                        {ref.url}
                      </a>
                    </div>
                  ))}
                </div>
              </section>

            </article>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-parchment-warm/40 py-12 mt-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-border-subtle" />
            <span className="text-gold-muted text-lg">✦</span>
            <div className="h-px w-8 bg-border-subtle" />
          </div>
          <p className="font-serif italic text-ink-muted text-sm">
            &ldquo;Đức tin vươn lên không phải nhờ vào sự chắc chắn của bằng chứng,
            <br className="hidden sm:block" />
            mà nhờ vào sức mạnh của hy vọng trong tâm điểm của sự ẩn mình.&rdquo;
          </p>
          <p className="font-sans text-xs text-warm-gray mt-4 tracking-wide uppercase">
            2026 Báo Cáo Nghiên Cứu Chuyên Sâu
          </p>
        </div>
      </footer>
    </>
  );
}
