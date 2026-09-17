import type {SiteContent} from './types'

export const fallbackContent: SiteContent = {
  brand: '403 PRODUCTIONS',
  brandDescriptor: 'PRODUCTIONS',
  navMeta: {vi: 'VIỆT NAM · 2026', en: 'VIETNAM · 2026'},
  tagline: {vi: 'NHỮNG CÂU CHUYỆN GẶP NHAU TẠI ĐÂY.', en: 'STORIES MEET HERE.'},
  supportingLine: {vi: 'Câu chuyện. Hình ảnh. Âm nhạc.', en: 'Stories. Visuals. Music.'},
  positioning: {vi: 'Sản xuất phim và truyền thông — Việt Nam.', en: 'Film & Media Production — Vietnam.'},
  navigation: [
    {label: {vi: 'Dự án', en: 'Work'}, href: '/work'},
    {label: {vi: 'Phim', en: 'Films'}, href: '/films'},
    {label: {vi: 'Giới thiệu', en: 'About'}, href: '/about'},
    {label: {vi: 'Liên hệ', en: 'Contact'}, href: '/contact'},
  ],
  home: {
    productionHouse: {vi: 'MỘT PRODUCTION HOUSE', en: 'A PRODUCTION HOUSE'},
    viewProjects: {vi: 'Xem dự án', en: 'View projects'},
    aboutLink: {vi: 'Giới thiệu 403', en: 'About 403'},
    featuredLabel: {vi: 'Dự án tiêu biểu', en: 'Featured work'},
    featuredHeading: {vi: '403 Films.', en: '403 Films.'},
    capabilitiesLabel: {vi: 'Năng lực', en: 'Capabilities'},
    capabilitiesHeading: {vi: 'Từ ý tưởng.\nĐến khung hình.', en: 'From concept.\nTo the frame.'},
  },
  about: {
    label: {vi: 'Về 403', en: 'About 403'},
    statement: {vi: '403 Productions là nơi làm phim, thử nghiệm với hình ảnh và kể những câu chuyện.', en: '403 Productions is a place to make films, experiment with images and tell stories.'},
    footnote: {vi: 'Production house độc lập · Việt Nam.', en: 'Independent production house · Vietnam.'},
  },
  services: [
    {title: {vi: 'Sản xuất phim', en: 'Film Production'}, description: {vi: 'Phim truyện / Quảng cáo / Music Video', en: 'Narrative / Commercial / Music Video'}},
    {title: {vi: 'Quay phim', en: 'Cinematography'}, description: {vi: 'Máy quay / Ánh sáng / Định hướng hình ảnh', en: 'Camera / Lighting / Visual Direction'}},
    {title: {vi: 'Hậu kỳ', en: 'Post Production'}, description: {vi: 'Dựng phim / Màu sắc / Âm thanh', en: 'Editing / Color / Sound'}},
  ],
  contact: {eyebrow: {vi: 'Bắt đầu dự án', en: 'Start a project'}, heading: {vi: 'Hãy cùng tạo nên một điều gì đó.', en: "Let's make something."}, email: '403productions.contact@gmail.com'},
  pages: {
    work:{meta:{vi:'DỰ ÁN TIÊU BIỂU / 02',en:'SELECTED WORK / 02'},kicker:{vi:'Dự án tuyển chọn',en:'Selected projects'},heading:{vi:'Những tác phẩm còn đọng lại.',en:'Work that stays with you.'},filters:[{vi:'Tất cả',en:'All'},{vi:'Phim truyện',en:'Narrative Film'},{vi:'Quảng cáo',en:'Commercial'},{vi:'Music Video',en:'Music Video'},{vi:'Nhiếp ảnh',en:'Photography'}],nextLabel:{vi:'Tiếp theo / Phim',en:'Next / Films'},nextLink:{vi:'403 Films',en:'403 Films'}},
    films:{meta:{vi:'PHIM NGUYÊN BẢN / 02',en:'ORIGINAL FILMS / 02'},kicker:{vi:'403 Films',en:'403 Films'},subKicker:{vi:'Tác phẩm nguyên bản',en:'Original IP'},heading:{vi:'Những câu chuyện nguyên bản của 403.',en:'Original stories by 403.'},intro:{vi:'Nơi phát triển phim truyện và tác phẩm nguyên bản của 403 Productions.',en:'A home for narrative films and original intellectual property developed by 403 Productions.'},projectGenre:{vi:'Tâm lý / Hành động',en:'Psychological / Action'},ctaLabel:{vi:'Phim nổi bật',en:'Featured film'},ctaLink:{vi:'Đi vào Giao Điểm',en:'Enter Crossroads'}},
    about:{meta:{vi:'VỀ CHÚNG TÔI / 01',en:'ABOUT US / 01'},kicker:{vi:'Production house độc lập\nSài Gòn · Việt Nam',en:'Independent production house\nSaigon · Vietnam'},heading:{vi:'Chúng tôi là 403 Productions.',en:'We are 403 Productions.'},heroCopy:{vi:'Chúng tôi làm phim, quảng cáo và những câu chuyện thị giác. Từ ý tưởng đến khung hình cuối.',en:'We make films, commercials and visual stories. From an idea to the final frame.'},established:{vi:'Thành lập 2026',en:'Est. 2026'},viewpointLabel:{vi:'Góc nhìn của chúng tôi',en:'Our point of view'},viewpointHeading:{vi:'Câu chuyện.\nHình ảnh. Âm nhạc.',en:'Stories.\nVisuals. Music.'},paragraphs:[{vi:'403 Productions là production house độc lập tại Việt Nam, tập trung vào phim, quảng cáo và kể chuyện bằng hình ảnh.',en:'403 Productions is an independent production house in Vietnam focused on film, commercial work and visual storytelling.'},{vi:'Chúng tôi phát triển phim nguyên bản và cộng tác trong các dự án tuyển chọn từ đạo diễn, quay phim đến hậu kỳ.',en:'We develop original films and collaborate on selected productions across directing, cinematography and post production.'}],teamLabel:{vi:'Đội ngũ',en:'Team'},team:[{name:'Minh Lăng',role:{vi:'Đồng sáng lập · Giám đốc sáng tạo / DOP',en:'Co-Founder · Creative Director / DOP'}}],capabilitiesLabel:{vi:'Năng lực',en:'Capabilities'},nextLabel:{vi:'Tiếp theo / Dự án',en:'Next / Work'},nextLink:{vi:'Khám phá dự án',en:'Explore our work'}},
    contact:{meta:{vi:'LIÊN HỆ / 04',en:'GET IN TOUCH / 04'},availability:{vi:'Quảng cáo · Phim\nMusic Video · Hợp tác',en:'Commercial · Film\nMusic Video · Collaboration'},heading:{vi:'Hãy cùng tạo nên một điều gì đó.',en:"Let's make something."},businessLabel:{vi:'Hợp tác dự án',en:'New business'},locationLabel:{vi:'Địa điểm',en:'Location'},location:{vi:'Việt Nam',en:'Vietnam'},enquiriesLabel:{vi:'Lĩnh vực',en:'Enquiries'},enquiries:{vi:'Quảng cáo · Phim\nMusic Video · Hợp tác sáng tạo',en:'Commercial · Film\nMusic Video · Creative Collaboration'},socialLabel:{vi:'Mạng xã hội',en:'Social'},social:'Instagram · Facebook\nYouTube · TikTok',copyright:{vi:'© 2026 · BẢO LƯU MỌI QUYỀN',en:'© 2026 · ALL RIGHTS RESERVED'}},
    filmDetail:{meta:{vi:'403 FILMS / 2026',en:'403 FILMS / 2026'},byline:{vi:'Một bộ phim của 403 Productions',en:'A film by 403 Productions'},genre:{vi:'Tâm lý / Hành động',en:'Psychological / Action'},location:{vi:'Việt Nam',en:'Vietnam'},filmLabel:{vi:'Bộ phim',en:'The film'},creditsLabel:{vi:'Ê-kíp',en:'Credits'},credits:[{role:{vi:'Sản xuất',en:'Production'},name:'403 Productions'},{role:{vi:'Đạo diễn / Quay phim / Dựng / Âm nhạc',en:'Director / Cinematography / Editing / Music'},name:'Minh Lăng'},{role:{vi:'Kịch bản',en:'Screenplay'},name:'Nguyễn Xuân Tiến'},{role:{vi:'Diễn viên',en:'Cast'},name:'Minh · Tuấn · Tiến · Giang · Hiếu · Nam · Mạnh · Trang · Linh · Hà Lê'}],ctaLabel:{vi:'Bắt đầu dự án',en:'Start a project'},ctaLink:{vi:'Liên hệ 403',en:'Contact 403'}}
  },
  featuredProjects: [{title: 'Giao Điểm', subtitle: 'Crossroads', slug: 'crossroads', year: 2026, category: {vi: 'Phim truyện', en: 'Narrative Film'}, tagline: {vi: '5 con đường. Một lựa chọn.', en: '5 paths. One choice.'}, featured: true}],
}
