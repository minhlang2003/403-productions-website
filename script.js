const nav = document.querySelector('[data-nav]');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const cursor = document.querySelector('.cursor');
const cursorLabel = cursor?.querySelector('span');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const motionLayer = document.createElement('div');
motionLayer.className = 'motion-layer is-entering';
motionLayer.setAttribute('aria-hidden', 'true');
motionLayer.innerHTML = `
  <span class="transition-line line-a"></span>
  <span class="transition-line line-b"></span>
  <span class="transition-line line-c"></span>
  <span class="transition-line line-d"></span>
  <strong>403</strong>
`;
document.body.appendChild(motionLayer);

const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
scrollProgress.setAttribute('aria-hidden', 'true');
scrollProgress.innerHTML = '<i></i>';
document.body.appendChild(scrollProgress);

if (reducedMotion) {
  motionLayer.remove();
} else {
  requestAnimationFrame(() => motionLayer.classList.add('enter-complete'));
  window.setTimeout(() => motionLayer.classList.remove('is-entering', 'enter-complete'), 1450);
}

const translations = {
  'About us': 'Giới thiệu',
  'About': 'Giới thiệu',
  'Work': 'Dự án',
  'Films': 'Phim',
  'Studio': 'Studio',
  'Contact': 'Liên hệ',
  'SAIGON · VIETNAM': 'SÀI GÒN · VIỆT NAM',
  'A PRODUCTION HOUSE / 2026': 'NHÀ SẢN XUẤT / 2026',
  'Stories beyond the frame': 'Những câu chuyện vượt khỏi khuôn hình',
  'Stories. Visuals. Music.': 'Câu chuyện. Hình ảnh. Âm nhạc.',
  'Stories': 'Những câu chuyện',
  'meet here.': 'gặp nhau tại đây.',
  'View our work': 'Xem dự án',
  'Film & Media Production': 'Sản xuất phim & truyền thông',
  'Vietnam.': 'Việt Nam.',
  'We make': 'Chúng tôi tạo nên',
  'images move.': 'những khung hình.',
  'People feel.': 'Để cảm xúc ở lại.',
  'Play showreel': 'Xem showreel',
  'Commercial · Film · Branded content': 'Quảng cáo · Điện ảnh · Nội dung thương hiệu',
  'From first thought to final frame.': 'Từ ý tưởng đầu tiên đến khung hình cuối cùng.',
  'Scroll to explore': 'Cuộn để khám phá',
  '01 / About': '01 / Về chúng tôi',
  '403 is an independent production house crafting films with cultural pulse, visual precision and a little beautiful tension.': '403 là một production house độc lập, kiến tạo những thước phim giàu bản sắc văn hoá, chỉn chu về hình ảnh và luôn có một chút căng thẳng đầy cuốn hút.',
  '403 Productions is a place to make films, experiment with images and tell stories.': '403 Productions là nơi làm phim, thử nghiệm với hình ảnh và kể những câu chuyện.',
  'Independent production house · Vietnam.': 'Production house độc lập · Việt Nam.',
  'Built in Saigon. Working everywhere.': 'Sinh ra tại Sài Gòn. Làm việc ở khắp mọi nơi.',
  'Meet the studio': 'Gặp gỡ 403',
  '02 / Selected work': '02 / Dự án tiêu biểu',
  'Made to': 'Được tạo nên',
  'be remembered.': 'để được nhớ mãi.',
  'Featured': 'Dự án',
  'film': 'phim',
  'projects': 'tiêu biểu',
  'Fashion Film · 2026': 'Phim thời trang · 2026',
  'Narrative Film · 2026': 'Phim truyện · 2026',
  'Automotive · 2025': 'Phim xe hơi · 2025',
  'Branded Story · 2025': 'Câu chuyện thương hiệu · 2025',
  '03 / What we do': '03 / Dịch vụ',
  'One vision.': 'Một tầm nhìn.',
  'Every frame.': 'Mọi khung hình.',
  'Creative development': 'Phát triển sáng tạo',
  'Concept, treatment and visual direction.': 'Ý tưởng, treatment và định hướng hình ảnh.',
  'Film production': 'Sản xuất phim',
  'Commercials, music videos and branded films.': 'TVC, music video và phim thương hiệu.',
  'Post-production': 'Hậu kỳ',
  'Edit, color, sound and finishing.': 'Dựng phim, chỉnh màu, âm thanh và hoàn thiện.',
  'FILM': 'ĐIỆN ẢNH',
  'COMMERCIAL': 'QUẢNG CÁO',
  'MUSIC VIDEO': 'MUSIC VIDEO',
  'BRANDED CONTENT': 'NỘI DUNG THƯƠNG HIỆU',
  '04 / Start a project': '04 / Bắt đầu dự án',
  'Available for selected projects': 'Đang nhận dự án chọn lọc',
  'Have a story?': 'Bạn có một câu chuyện?',
  'Let’s make it real.': 'Hãy cùng biến nó thành hiện thực.',
  'New business': 'Hợp tác dự án',
  'NEW BUSINESS': 'HỢP TÁC DỰ ÁN',
  'Follow': 'Theo dõi',
  'FOLLOW': 'THEO DÕI',
  'ABOUT US / 01': 'GIỚI THIỆU / 01',
  'Independent production house': 'Production house độc lập',
  'We chase': 'Chúng tôi tìm kiếm',
  'We are': 'Chúng tôi là',
  'Productions.': 'Productions.',
  'We make films, commercials and visual stories. From an idea to the final frame.': 'Chúng tôi làm phim, quảng cáo và kể chuyện bằng hình ảnh. Từ ý tưởng đến khung hình cuối cùng.',
  '403 Productions is an independent production house in Vietnam focused on film, commercial work and visual storytelling.': '403 Productions là một production house độc lập tại Việt Nam, tập trung vào điện ảnh, quảng cáo và kể chuyện bằng hình ảnh.',
  'We develop original films and collaborate on selected productions across directing, cinematography, editing, sound and music.': 'Chúng tôi phát triển phim nguyên bản và cộng tác trong các dự án chọn lọc về đạo diễn, quay phim, dựng phim, âm thanh và âm nhạc.',
  'Team': 'Đội ngũ',
  'Co-Founder · Creative Director / DOP': 'Đồng sáng lập · Giám đốc Sáng tạo / DOP',
  'Film Production': 'Sản xuất phim',
  'Narrative / Commercial / Music Video': 'Phim truyện / Quảng cáo / Music Video',
  'Cinematography': 'Quay phim',
  'Camera / Lighting / Visual Direction': 'Máy quay / Ánh sáng / Định hướng hình ảnh',
  'Post Production': 'Hậu kỳ',
  'Editing / Color / Sound': 'Dựng phim / Màu sắc / Âm thanh',
  'Concept / Visual Development': 'Ý tưởng / Phát triển hình ảnh',
  'the feeling': 'cảm xúc còn lại',
  'after the cut.': 'sau mỗi thước phim.',
  '403 brings filmmakers, artists and brands together to make work with cultural pulse and lasting emotional weight.': '403 kết nối các nhà làm phim, nghệ sĩ và thương hiệu để tạo nên những tác phẩm giàu nhịp đập văn hoá và sức nặng cảm xúc lâu dài.',
  'Our point of view': 'Quan điểm của chúng tôi',
  'Not content.': 'Không chỉ là nội dung.',
  'A lasting image.': 'Mà là hình ảnh còn mãi.',
  'We believe a powerful film begins before the camera rolls. It starts with a point of view — one strong enough to shape every choice from casting and light to rhythm and sound.': 'Chúng tôi tin rằng một bộ phim mạnh mẽ bắt đầu từ trước khi máy quay hoạt động. Nó khởi nguồn từ một góc nhìn đủ rõ để dẫn dắt mọi lựa chọn — từ casting, ánh sáng đến nhịp điệu và âm thanh.',
  'Our process is collaborative, precise and deeply human. We build the right team around each story, then protect the idea all the way to the final frame.': 'Quy trình của chúng tôi đề cao cộng tác, sự chính xác và tính con người. Chúng tôi xây dựng đội ngũ phù hợp cho từng câu chuyện và bảo vệ ý tưởng đến tận khung hình cuối cùng.',
  'What guides us': 'Điều dẫn lối chúng tôi',
  'Clarity before spectacle': 'Rõ ràng trước hào nhoáng',
  'Every visual choice serves the story.': 'Mỗi lựa chọn hình ảnh đều phục vụ câu chuyện.',
  'Craft in every detail': 'Chỉn chu trong từng chi tiết',
  'Good enough never makes the final cut.': '“Đủ tốt” không bao giờ là đích đến.',
  'Culture, not convention': 'Bản sắc, không khuôn mẫu',
  'Made here. Ready for everywhere.': 'Được tạo nên tại đây. Sẵn sàng đi khắp nơi.',
  'Next / 02': 'Tiếp theo / 02',
  'Explore our work': 'Khám phá dự án',
  'SELECTED WORK / 02': 'DỰ ÁN TIÊU BIỂU / 02',
  'Selected projects': 'Dự án tuyển chọn',
  'Work that': 'Những tác phẩm',
  'stays with you.': 'còn mãi trong bạn.',
  'All': 'Tất cả',
  'Narrative Film': 'Phim truyện',
  'Photography': 'Nhiếp ảnh',
  'Commercial': 'Quảng cáo',
  'Film': 'Điện ảnh',
  'Music video': 'Music video',
  'Music Video · 2024': 'Music video · 2024',
  'Next / 03': 'Tiếp theo / 03',
  'Inside the studio': 'Bên trong studio',
  'THE STUDIO / 03': 'STUDIO / 03',
  'From first thought to final frame': 'Từ ý tưởng đầu tiên đến khung hình cuối cùng',
  'A flexible team.': 'Một đội ngũ linh hoạt.',
  'One clear vision.': 'Một tầm nhìn thống nhất.',
  'Capabilities': 'Năng lực',
  'Creative': 'Sáng tạo',
  'Concept development': 'Phát triển ý tưởng',
  'Treatment & scripting': 'Treatment & kịch bản',
  'Visual research': 'Nghiên cứu hình ảnh',
  'Creative direction': 'Định hướng sáng tạo',
  'Production': 'Sản xuất',
  'Commercial films': 'Phim quảng cáo',
  'Music videos': 'Music video',
  'Branded content': 'Nội dung thương hiệu',
  'Editorial production': 'Sản xuất editorial',
  'Post': 'Hậu kỳ',
  'Offline & online edit': 'Dựng offline & online',
  'Color grading': 'Chỉnh màu',
  'Sound design': 'Thiết kế âm thanh',
  'VFX & delivery': 'VFX & bàn giao',
  'Projects delivered': 'Dự án hoàn thành',
  'Countries reached': 'Quốc gia tiếp cận',
  'Shared standard': 'Tiêu chuẩn chung',
  'Next / 04': 'Tiếp theo / 04',
  'Start a project': 'Bắt đầu dự án',
  'Original stories': 'Những câu chuyện nguyên bản',
  'by 403.': 'bởi 403.',
  'Original IP': 'Tác phẩm nguyên bản',
  'A home for narrative films and original intellectual property developed by 403 Productions.': 'Nơi dành cho phim truyện và các tác phẩm nguyên bản được phát triển bởi 403 Productions.',
  'Psychological / Action': 'Tâm lý / Hành động',
  'Featured film': 'Phim nổi bật',
  'Enter Crossroads': 'Khám phá Giao Điểm',
  'A film by 403 Productions': 'Một bộ phim của 403 Productions',
  'The film': 'Bộ phim',
  'Five paths converge at a single decisive moment. Giao Điểm is an original narrative film developed by 403 Productions.': 'Năm con đường hội tụ tại một khoảnh khắc quyết định. Giao Điểm là phim truyện nguyên bản do 403 Productions phát triển.',
  'Credits': 'Đoàn phim',
  'Screenplay': 'Kịch bản',
  'Cast': 'Diễn viên',
  'Contact 403': 'Liên hệ 403',
  'GET IN TOUCH / 04': 'LIÊN HỆ / 04',
  'Now considering': 'Đang nhận lịch',
  'Q4 2026 projects': 'dự án Quý 4 · 2026',
  'Bring us': 'Hãy mang đến',
  'your impossible.': 'điều không thể.',
  "Let's make": 'Hãy cùng tạo nên',
  'something.': 'một điều gì đó.',
  'Location': 'Địa điểm',
  'Enquiries': 'Loại dự án',
  'Creative Collaboration': 'Hợp tác sáng tạo',
  'Social': 'Mạng xã hội',
  'Visit us': 'Ghé thăm',
  'Saigon, Vietnam': 'Sài Gòn, Việt Nam',
  'By appointment only': 'Vui lòng đặt lịch trước',
  'Local time': 'Giờ địa phương',
  'ALL RIGHTS RESERVED': 'BẢO LƯU MỌI QUYỀN'
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName) || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});
while (walker.nextNode()) textNodes.push(walker.currentNode);

const originalText = new Map(textNodes.map((node) => [node, node.nodeValue]));

function translateTextNode(node, dictionary) {
  const raw = node.nodeValue;
  const value = raw.trim();
  if (!dictionary[value]) return;
  node.nodeValue = raw.replace(value, dictionary[value]);
}

function applyLanguage(language) {
  textNodes.forEach((node) => {
    node.nodeValue = originalText.get(node);
    if (language === 'vi') translateTextNode(node, translations);
  });
  document.documentElement.lang = language;
  const titles = {
    '/': ['403 Productions — Chuyện kể ngoài khuôn hình', '403 Productions — Stories Beyond the Frame'],
    '/about': ['Giới thiệu — 403 Productions', 'About us — 403 Productions'],
    '/work': ['Dự án — 403 Productions', 'Work — 403 Productions'],
    '/studio': ['Studio — 403 Productions', 'Studio — 403 Productions'],
    '/contact': ['Liên hệ — 403 Productions', 'Contact — 403 Productions'],
    '/films': ['Phim — 403 Productions', 'Films — 403 Productions'],
    '/films/crossroads': ['Giao Điểm — 403 Films', 'Crossroads — 403 Films']
  };
  const pageTitles = titles[window.location.pathname] || titles['/'];
  document.title = language === 'vi' ? pageTitles[0] : pageTitles[1];
  document.querySelectorAll('.lang-toggle').forEach((button) => {
    button.textContent = language === 'vi' ? 'EN' : 'VI';
    button.setAttribute('aria-label', language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
  });
  localStorage.setItem('403-language', language);
}

const initialLanguage = localStorage.getItem('403-language') || 'vi';
applyLanguage(initialLanguage);

document.querySelectorAll('.lang-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'vi' ? 'en' : 'vi');
  });
});

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  scrollProgress.style.setProperty('--scroll-progress', progress);
}, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.classList.toggle('open', !isOpen);
  mobileMenu.setAttribute('aria-hidden', String(isOpen));
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

if (window.matchMedia('(pointer: fine)').matches && cursor) {
  window.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll('[data-cursor]').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      cursorLabel.textContent = item.dataset.cursor;
      cursor.classList.add('visible');
    });
    item.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
  });
}

if (!reducedMotion) {
  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      event.preventDefault();
      motionLayer.classList.remove('enter-complete');
      motionLayer.classList.add('is-leaving');
      window.setTimeout(() => { window.location.href = destination.href; }, 720);
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.project, .service, .statement-lead').forEach((element) => observer.observe(element));

document.querySelectorAll('.work-item, .belief-row, .film-credits > div:not(.section-label), .contact-details > div').forEach((element, index) => {
  element.classList.add('motion-reveal');
  element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`);
  observer.observe(element);
});

if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  const parallaxTargets = document.querySelectorAll('.film-frame, .crossroads-lines, .studio-frame');
  window.addEventListener('pointermove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    parallaxTargets.forEach((element, index) => {
      const strength = index % 2 ? 15 : 24;
      element.style.setProperty('--parallax-x', `${x * strength}px`);
      element.style.setProperty('--parallax-y', `${y * strength}px`);
    });
  }, { passive: true });

  document.querySelectorAll('.project-media, .work-art').forEach((media) => {
    media.addEventListener('pointermove', (event) => {
      const rect = media.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      media.style.setProperty('--tilt-x', `${y * -4}deg`);
      media.style.setProperty('--tilt-y', `${x * 5}deg`);
      media.style.setProperty('--light-x', `${(x + 0.5) * 100}%`);
      media.style.setProperty('--light-y', `${(y + 0.5) * 100}%`);
    });
    media.addEventListener('pointerleave', () => {
      media.style.setProperty('--tilt-x', '0deg');
      media.style.setProperty('--tilt-y', '0deg');
    });
  });
}

document.querySelectorAll('h1, .statement-lead, .page-cta a').forEach((heading) => {
  heading.classList.add('kinetic-heading');
});

document.querySelectorAll('.magnetic').forEach((element) => {
  element.addEventListener('mousemove', (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform = '';
  });
});

const localTime = document.querySelector('#local-time');
if (localTime) {
  const updateTime = () => {
    localTime.textContent = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', hour12: false
    }).format(new Date()) + ' · GMT +7';
  };
  updateTime();
  window.setInterval(updateTime, 30000);
}
