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
  featuredProjects: [{title: 'Giao Điểm', subtitle: 'Crossroads', slug: 'crossroads', year: 2026, category: {vi: 'Phim truyện', en: 'Narrative Film'}, tagline: {vi: '5 con đường. Một lựa chọn.', en: '5 paths. One choice.'}, featured: true}],
}
