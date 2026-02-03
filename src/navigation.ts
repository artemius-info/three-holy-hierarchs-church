import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Головна',
      href: getPermalink('/'),
    },
    {
      text: 'Про нас',
      links: [
        {
          text: 'Історія храму',
          href: getPermalink('/about'),
        },
        {
          text: 'Святі покровителі',
          href: getPermalink('/saints'),
        },
        {
          text: 'Контакти',
          href: getPermalink('/contacts'),
        },
      ],
    },
    {
      text: 'Богослужіння',
      href: getPermalink('/schedule'),
    },
    {
      text: 'Новини',
      href: getBlogPermalink(),
    },
    {
      text: 'Проповіді',
      href: getPermalink('/sermons'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Про храм',
      links: [
        { text: 'Історія', href: getPermalink('/about') },
        { text: 'Святі покровителі', href: getPermalink('/saints') },
        { text: 'Контакти', href: getPermalink('/contacts') },
      ],
    },
    {
      title: 'Прихожанам',
      links: [
        { text: 'Розклад богослужінь', href: getPermalink('/schedule') },
        { text: 'Новини', href: getBlogPermalink() },
        { text: 'Проповіді', href: getPermalink('/sermons') },
      ],
    },
    {
      title: 'Контакти',
      links: [
        { text: 'м. Київ, Поділ', href: getPermalink('/contacts') },
        { text: 'Зв\'язок з нами', href: getPermalink('/contacts') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Храм на честь Трьох святителів на Подолі © ${new Date().getFullYear()}. Всі права захищені.
  `,
};
