import type { Statute, LearningPath } from './types';

export const statutes: Statute[] = [
  {
    id: 'ipc-1860',
    title: 'The Indian Penal Code, 1860',
    description: 'The official criminal code of India. It is a comprehensive code intended to cover all substantive aspects of criminal law.',
    year: 1860,
    act_no: 45,
    category: 'Criminal Law'
  },
  {
    id: 'ica-1872',
    title: 'The Indian Contract Act, 1872',
    description: 'The main law that governs contracts in India and is the key law regulating Indian contract law.',
    year: 1872,
    act_no: 9,
    category: 'Civil Law'
  },
  {
    id: 'iea-1872',
    title: 'The Indian Evidence Act, 1872',
    description: 'Originally passed in India by the Imperial Legislative Council in 1872, during the British Raj, containing a set of rules and allied issues governing admissibility of any evidence in the Indian courts of law.',
    year: 1872,
    act_no: 1,
    category: 'Procedural Law'
  },
  {
    id: 'cpc-1908',
    title: 'The Code of Civil Procedure, 1908',
    description: 'A procedural law related to the administration of civil proceedings in India.',
    year: 1908,
    act_no: 5,
    category: 'Procedural Law'
  },
  {
    id: 'crpc-1973',
    title: 'The Code of Criminal Procedure, 1973',
    description: 'The main legislation on procedure for administration of substantive criminal law in India.',
    year: 1973,
    act_no: 2,
    category: 'Procedural Law'
  },
  {
    id: 'coi-1950',
    title: 'The Constitution of India, 1950',
    description: 'The supreme law of India. The document lays down the framework that demarcates fundamental political code, structure, procedures, powers, and duties of government institutions and sets out fundamental rights, directive principles, and the duties of citizens.',
    year: 1950,
    act_no: 0,
    category: 'Constitutional Law'
  },
  {
    id: 'tp-act-1882',
    title: 'The Transfer of Property Act, 1882',
    description: 'A law which regulates the transfer of property in India. It contains specific provisions regarding what constitutes a transfer and the conditions attached to it.',
    year: 1882,
    act_no: 4,
    category: 'Property Law'
  },
  {
    id: 'sra-1963',
    title: 'The Specific Relief Act, 1963',
    description: 'A law dealing with remedies for breach of contract. It provides for specific performance of contracts and other reliefs.',
    year: 1963,
    act_no: 47,
    category: 'Civil Law'
  },
  {
    id: 'la-1963',
    title: 'The Limitation Act, 1963',
    description: 'Prescribes the time-limit for different suits within which an aggrieved person can approach the court for redress or justice.',
    year: 1963,
    act_no: 36,
    category: 'Procedural Law'
  },
  {
    id: 'nia-1881',
    title: 'The Negotiable Instruments Act, 1881',
    description: 'Governs negotiable instruments like promissory notes, bills of exchange, and cheques.',
    year: 1881,
    act_no: 26,
    category: 'Commercial Law'
  },
  {
    id: 'ca-2013',
    title: 'The Companies Act, 2013',
    description: 'An Act of the Parliament of India on Indian company law which regulates incorporation of a company, responsibilities of a company, directors, dissolution of a company.',
    year: 2013,
    act_no: 18,
    category: 'Corporate Law'
  },
  {
    id: 'ita-1961',
    title: 'The Income-Tax Act, 1961',
    description: 'The statute that governs the levy, administration, collection, and recovery of income tax in India.',
    year: 1961,
    act_no: 43,
    category: 'Tax Law'
  },
  {
    id: 'ida-1947',
    title: 'The Industrial Disputes Act, 1947',
    description: 'An act to make provision for the investigation and settlement of industrial disputes, and for certain other purposes.',
    year: 1947,
    act_no: 14,
    category: 'Labour Law'
  },
  {
    id: 'hsa-1956',
    title: 'The Hindu Succession Act, 1956',
    description: 'An Act to amend and codify the law relating to intestate succession among Hindus.',
    year: 1956,
    act_no: 30,
    category: 'Family Law'
  },
  {
    id: 'hma-1955',
    title: 'The Hindu Marriage Act, 1955',
    description: 'An Act to amend and codify the law relating to marriage among Hindus.',
    year: 1955,
    act_no: 25,
    category: 'Family Law'
  },
  {
    id: 'ita-2000',
    title: 'The Information Technology Act, 2000',
    description: 'The primary law in India dealing with cybercrime and electronic commerce.',
    year: 2000,
    act_no: 21,
    category: 'Cyber Law'
  },
  {
    id: 'rtia-2005',
    title: 'The Right to Information Act, 2005',
    description: 'An Act to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities.',
    year: 2005,
    act_no: 22,
    category: 'Constitutional Law'
  },
  {
    id: 'epa-1986',
    title: 'The Environment (Protection) Act, 1986',
    description: 'An Act to provide for the protection and improvement of environment and for matters connected therewith.',
    year: 1986,
    act_no: 29,
    category: 'Environmental Law'
  },
  {
    id: 'cpa-2019',
    title: 'The Consumer Protection Act, 2019',
    description: 'An Act to provide for protection of the interests of consumers and for the said purpose, to establish authorities for timely and effective administration and settlement of consumers\' disputes.',
    year: 2019,
    act_no: 35,
    category: 'Consumer Law'
  },
  {
    id: 'pocso-2012',
    title: 'The Protection of Children from Sexual Offences Act, 2012',
    description: 'A special law to protect children from offences of sexual assault, sexual harassment and pornography.',
    year: 2012,
    act_no: 32,
    category: 'Criminal Law'
  },
  {
    id: 'pca-1988',
    title: 'The Prevention of Corruption Act, 1988',
    description: 'An Act to consolidate and amend the law relating to the prevention of corruption and for matters connected therewith.',
    year: 1988,
    act_no: 49,
    category: 'Criminal Law'
  },
  {
    id: 'ndps-1985',
    title: 'The Narcotic Drugs and Psychotropic Substances Act, 1985',
    description: 'An Act to consolidate and amend the law relating to narcotic drugs, to make stringent provisions for the control and regulation of operations relating to narcotic drugs and psychotropic substances.',
    year: 1985,
    act_no: 61,
    category: 'Criminal Law'
  },
  {
    id: 'mva-1988',
    title: 'The Motor Vehicles Act, 1988',
    description: 'An Act to consolidate and amend the law relating to motor vehicles.',
    year: 1988,
    act_no: 59,
    category: 'Transportation Law'
  },
  {
    id: 'arbitration-1996',
    title: 'The Arbitration and Conciliation Act, 1996',
    description: 'An Act to consolidate and amend the law relating to domestic arbitration, international commercial arbitration and enforcement of foreign arbitral awards.',
    year: 1996,
    act_no: 26,
    category: 'ADR Law'
  },
  {
    id: 'copyright-1957',
    title: 'The Copyright Act, 1957',
    description: 'An Act to amend and consolidate the law relating to copyright.',
    year: 1957,
    act_no: 14,
    category: 'Intellectual Property Law'
  },
  {
    id: 'trademarks-1999',
    title: 'The Trade Marks Act, 1999',
    description: 'An Act to amend and consolidate the law relating to trade marks, to provide for registration and better protection of trade marks for goods and services and for the prevention of the use of fraudulent marks.',
    year: 1999,
    act_no: 47,
    category: 'Intellectual Property Law'
  },
  {
    id: 'patents-1970',
    title: 'The Patents Act, 1970',
    description: 'An Act to amend and consolidate the law relating to patents.',
    year: 1970,
    act_no: 39,
    category: 'Intellectual Property Law'
  },
  {
    id: 'designs-2000',
    title: 'The Designs Act, 2000',
    description: 'An Act to consolidate and amend the law relating to protection of designs.',
    year: 2000,
    act_no: 16,
    category: 'Intellectual Property Law'
  },
  {
    id: 'domviolence-2005',
    title: 'The Protection of Women from Domestic Violence Act, 2005',
    description: 'An Act to provide for more effective protection of the rights of women guaranteed under the Constitution who are victims of violence of any kind occurring within the family.',
    year: 2005,
    act_no: 43,
    category: 'Family Law'
  },
  {
    id: 'fema-1999',
    title: 'The Foreign Exchange Management Act, 1999',
    description: 'An Act to consolidate and amend the law relating to foreign exchange with the objective of facilitating external trade and payments and for promoting the orderly development and maintenance of foreign exchange market in India.',
    year: 1999,
    act_no: 42,
    category: 'Economic Law'
  },
  {
    id: 'sebi-1992',
    title: 'The Securities and Exchange Board of India Act, 1992',
    description: 'An Act to provide for the establishment of a Board to protect the interests of investors in securities and to promote the development of, and to regulate, the securities market.',
    year: 1992,
    act_no: 15,
    category: 'Corporate Law'
  },
  {
    id: 'rbi-1934',
    title: 'The Reserve Bank of India Act, 1934',
    description: 'The legislative act under which the Reserve Bank of India was formed. This act along with the Companies Act, which was amended in 1936, were meant to provide a framework for the supervision of banking firms in India.',
    year: 1934,
    act_no: 2,
    category: 'Banking Law'
  },
  {
    id: 'banking-reg-1949',
    title: 'The Banking Regulation Act, 1949',
    description: 'A legislation in India that regulates all banking firms in India.',
    year: 1949,
    act_no: 10,
    category: 'Banking Law'
  },
  {
    id: 'insolvency-2016',
    title: 'The Insolvency and Bankruptcy Code, 2016',
    description: 'The bankruptcy law of India which seeks to consolidate the existing framework by creating a single law for insolvency and bankruptcy.',
    year: 2016,
    act_no: 31,
    category: 'Corporate Law'
  },
  {
    id: 'wa-1972',
    title: 'The Water (Prevention and Control of Pollution) Act, 1974',
    description: 'An Act to provide for the prevention and control of water pollution and the maintaining or restoring of wholesomeness of water.',
    year: 1974,
    act_no: 6,
    category: 'Environmental Law'
  },
  {
    id: 'aa-1972',
    title: 'The Air (Prevention and Control of Pollution) Act, 1981',
    description: 'An Act to provide for the prevention, control and abatement of air pollution.',
    year: 1981,
    act_no: 14,
    category: 'Environmental Law'
  },
  {
    id: 'fca-1980',
    title: 'The Forest (Conservation) Act, 1980',
    description: 'An Act to provide for the conservation of forests and for matters connected therewith or ancillary or incidental thereto.',
    year: 1980,
    act_no: 69,
    category: 'Environmental Law'
  },
  {
    id: 'wpa-1972',
    title: 'The Wild Life (Protection) Act, 1972',
    description: 'An Act to provide for the protection of wild animals, birds and plants and for matters connected therewith.',
    year: 1972,
    act_no: 53,
    category: 'Environmental Law'
  },
  {
    id: 'ppa-1923',
    title: 'The Indian Partnership Act, 1932',
    description: 'An act enacted by the Parliament of India to regulate partnership firms in India.',
    year: 1932,
    act_no: 9,
    category: 'Commercial Law'
  },
  {
    id: 'soga-1930',
    title: 'The Sale of Goods Act, 1930',
    description: 'A law that governs the sale of goods in India. It is a part of the Indian Contract Act, 1872.',
    year: 1930,
    act_no: 3,
    category: 'Commercial Law'
  },
  {
    id: 'fa-1948',
    title: 'The Factories Act, 1948',
    description: 'A social legislation which has been enacted for occupational safety, health and welfare of workers at work places.',
    year: 1948,
    act_no: 63,
    category: 'Labour Law'
  },
  {
    id: 'mwa-1948',
    title: 'The Minimum Wages Act, 1948',
    description: 'An Act of Parliament concerning Indian labour law that sets the minimum wages that must be paid to skilled and unskilled labours.',
    year: 1948,
    act_no: 11,
    category: 'Labour Law'
  },
  {
    id: 'pga-1972',
    title: 'The Payment of Gratuity Act, 1972',
    description: 'An Act to provide for a scheme for the payment of gratuity to employees engaged in factories, mines, oilfields, plantations, ports, railway companies, shops or other establishments.',
    year: 1972,
    act_no: 39,
    category: 'Labour Law'
  },
  {
    id: 'epfa-1952',
    title: 'The Employees Provident Funds and Miscellaneous Provisions Act, 1952',
    description: 'An Act to provide for the institution of provident funds, pension fund and deposit-linked insurance fund for employees in factories and other establishments.',
    year: 1952,
    act_no: 19,
    category: 'Labour Law'
  },
  {
    id: 'eca-1923',
    title: 'The Employees Compensation Act, 1923',
    description: 'Provides for the payment by certain classes of employers to their employees of compensation for injury by accident.',
    year: 1923,
    act_no: 8,
    category: 'Labour Law'
  },
  {
    id: 'mcaa-1959',
    title: 'The Muslim Personal Law (Shariat) Application Act, 1937',
    description: 'An Act to make provisions for the application of the Muslim Personal Law (Shariat) to Muslims in India.',
    year: 1937,
    act_no: 26,
    category: 'Family Law'
  },
  {
    id: 'dmwa-1986',
    title: 'The Dissolution of Muslim Marriages Act, 1939',
    description: 'An Act to consolidate and clarify the provisions of Muslim Law relating to suits for dissolution of marriage by women married under Muslim Law.',
    year: 1939,
    act_no: 8,
    category: 'Family Law'
  },
  {
    id: 'gaa-1890',
    title: 'The Guardians and Wards Act, 1890',
    description: 'A law to consolidate and amend the law relating to Guardian and Ward.',
    year: 1890,
    act_no: 8,
    category: 'Family Law'
  },
  {
    id: 'haga-1956',
    title: 'The Hindu Minority and Guardianship Act, 1956',
    description: 'An Act to amend and codify certain parts of the law relating to minority and guardianship among Hindus.',
    year: 1956,
    act_no: 32,
    category: 'Family Law'
  },
  {
    id: 'hasa-1956',
    title: 'The Hindu Adoptions and Maintenance Act, 1956',
    description: 'An Act to amend and codify the law relating to adoptions and maintenance among Hindus.',
    year: 1956,
    act_no: 78,
    category: 'Family Law'
  },
  {
    id: 'sma-1954',
    title: 'The Special Marriage Act, 1954',
    description: 'An Act to provide a special form of marriage in certain cases, for the registration of such and certain other marriages and for divorce.',
    year: 1954,
    act_no: 43,
    category: 'Family Law'
  },
  {
    id: 'fma-1969',
    title: 'The Foreign Marriage Act, 1969',
    description: 'An Act to make provision relating to marriages of citizens of India outside India.',
    year: 1969,
    act_no: 33,
    category: 'Family Law'
  },
  {
    id: 'ra-1925',
    title: 'The Indian Succession Act, 1925',
    description: 'An Act to consolidate the law applicable to intestate and testamentary succession in India.',
    year: 1925,
    act_no: 39,
    category: 'Family Law'
  },
  {
    id: 'jja-2015',
    title: 'The Juvenile Justice (Care and Protection of Children) Act, 2015',
    description: 'An Act to consolidate and amend the law relating to children alleged and found to be in conflict with law and children in need of care and protection.',
    year: 2015,
    act_no: 2,
    category: 'Criminal Law'
  },
  {
    id: 'rti-2019',
    title: 'The Right of Children to Free and Compulsory Education Act, 2009',
    description: 'An Act to provide for free and compulsory education to all children of the age of six to fourteen years.',
    year: 2009,
    act_no: 35,
    category: 'Education Law'
  },
  {
    id: 'pndta-1994',
    title: 'The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994',
    description: 'An Act to provide for the regulation of the use of pre-natal diagnostic techniques for the purpose of detecting genetic or metabolic disorders or chromosomal abnormalities or certain congenital malformations or sex-linked disorders and for the prevention of the misuse of such techniques for the purpose of pre-natal sex determination leading to female foeticide.',
    year: 1994,
    act_no: 57,
    category: 'Medical Law'
  },
  {
    id: 'mtpa-1971',
    title: 'The Medical Termination of Pregnancy Act, 1971',
    description: 'An Act to provide for the termination of certain pregnancies by registered medical practitioners and for matters connected therewith or incidental thereto.',
    year: 1971,
    act_no: 34,
    category: 'Medical Law'
  },
  {
    id: 'imca-1956',
    title: 'The Indian Medical Council Act, 1956',
    description: 'An Act to provide for the reconstitution of the Medical Council of India, and the maintenance of a Medical Register for India and for matters connected therewith.',
    year: 1956,
    act_no: 102,
    category: 'Medical Law'
  },
  {
    id: 'tpa-1954',
    title: 'The Transplantation of Human Organs Act, 1994',
    description: 'An Act to provide for the regulation of removal, storage and transplantation of human organs for therapeutic purposes and for the prevention of commercial dealings in human organs.',
    year: 1994,
    act_no: 42,
    category: 'Medical Law'
  },
  {
    id: 'llpa-2008',
    title: 'The Limited Liability Partnership Act, 2008',
    description: 'The Act which governs limited liability partnerships in India.',
    year: 2008,
    act_no: 6,
    category: 'Corporate Law'
  },
  {
    id: 'ca-1962',
    title: 'The Customs Act, 1962',
    description: 'An Act to consolidate and amend the law relating to customs.',
    year: 1962,
    act_no: 52,
    category: 'Tax Law'
  },
  {
    id: 'cst-1956',
    title: 'The Central Sales Tax Act, 1956',
    description: 'An Act to formulate principles for determining when a sale or purchase of goods takes place in the course of inter-State trade or commerce or outside a State or in the course of import into or export from India.',
    year: 1956,
    act_no: 74,
    category: 'Tax Law'
  },
  {
    id: 'gst-2017',
    title: 'The Central Goods and Services Tax Act, 2017',
    description: 'An Act to make a provision for levy and collection of tax on intra-State supply of goods or services or both by the Central Government.',
    year: 2017,
    act_no: 12,
    category: 'Tax Law'
  },
  {
    id: 'igst-2017',
    title: 'The Integrated Goods and Services Tax Act, 2017',
    description: 'An Act to make a provision for levy and collection of tax on inter-State supply of goods or services or both by the Central Government.',
    year: 2017,
    act_no: 13,
    category: 'Tax Law'
  },
  {
    id: 'ugst-2017',
    title: 'The Union Territory Goods and Services Tax Act, 2017',
    description: 'An Act to make a provision for levy and collection of tax on intra-State supply of goods or services or both by the Union territories.',
    year: 2017,
    act_no: 14,
    category: 'Tax Law'
  },
  {
    id: 'sarfaesi-2002',
    title: 'The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002',
    description: 'An Act to regulate securitisation and reconstruction of financial assets and enforcement of security interest and to provide for a central database of security interests created on property rights.',
    year: 2002,
    act_no: 54,
    category: 'Banking Law'
  },
  {
    id: 'rdbfi-1993',
    title: 'The Recovery of Debts Due to Banks and Financial Institutions Act, 1993',
    description: 'An Act to provide for the establishment of Tribunals for expeditious adjudication and recovery of debts due to banks and financial institutions.',
    year: 1993,
    act_no: 51,
    category: 'Banking Law'
  },
  {
    id: 'competition-2002',
    title: 'The Competition Act, 2002',
    description: 'An Act to provide, keeping in view of the economic development of the country, for the establishment of a Commission to prevent practices having adverse effect on competition, to promote and sustain competition in markets, to protect the interests of consumers and to ensure freedom of trade.',
    year: 2002,
    act_no: 12,
    category: 'Economic Law'
  },
  {
    id: 'advocates-1961',
    title: 'The Advocates Act, 1961',
    description: 'An Act to amend and consolidate the law relating to legal practitioners and to provide for the constitution of Bar Councils and an All-India Bar.',
    year: 1961,
    act_no: 25,
    category: 'Procedural Law'
  },
  {
    id: 'lsa-1987',
    title: 'The Legal Services Authorities Act, 1987',
    description: 'An Act to constitute legal services authorities to provide free and competent legal services to the weaker sections of the society.',
    year: 1987,
    act_no: 39,
    category: 'Procedural Law'
  },
  {
    id: 'hcja-1861',
    title: 'The Indian High Courts Act, 1861',
    description: 'An Act for establishing High Courts of Judicature in India.',
    year: 1861,
    act_no: 24,
    category: 'Constitutional Law'
  },
  {
    id: 'scja-1950',
    title: 'The Supreme Court (Number of Judges) Act, 1956',
    description: 'An Act to provide for the number of judges of the Supreme Court of India, other than the Chief Justice.',
    year: 1956,
    act_no: 55,
    category: 'Constitutional Law'
  },
  {
    id: 'official-languages-1963',
    title: 'The Official Languages Act, 1963',
    description: 'An Act to provide for the languages which may be used for the official purposes of the Union, for transaction of business in Parliament, for Central and State Acts and for certain purposes in High Courts.',
    year: 1963,
    act_no: 19,
    category: 'Constitutional Law'
  },
  {
    id: 'citizenship-1955',
    title: 'The Citizenship Act, 1955',
    description: 'An Act to provide for the acquisition and determination of Indian citizenship.',
    year: 1955,
    act_no: 57,
    category: 'Constitutional Law'
  },
  {
    id: 'passports-1967',
    title: 'The Passports Act, 1967',
    description: 'An Act to provide for the issue of passports and travel documents to regulate the departure from India of citizens of India and other persons.',
    year: 1967,
    act_no: 15,
    category: 'Administrative Law'
  },
  {
    id: 'foreigners-1946',
    title: 'The Foreigners Act, 1946',
    description: 'An Act to consolidate and amend the law relating to foreigners.',
    year: 1946,
    act_no: 31,
    category: 'Administrative Law'
  },
  {
    id: 'extradition-1962',
    title: 'The Extradition Act, 1962',
    description: 'An Act to consolidate and amend the law relating to the extradition of fugitive criminals.',
    year: 1962,
    act_no: 34,
    category: 'Criminal Law'
  },
  {
    id: 'pmla-2002',
    title: 'The Prevention of Money-Laundering Act, 2002',
    description: 'An Act to prevent money-laundering and to provide for confiscation of property derived from, or involved in, money-laundering.',
    year: 2003,
    act_no: 15,
    category: 'Economic Law'
  },
  {
    id: 'unlawful-activities-1967',
    title: 'The Unlawful Activities (Prevention) Act, 1967',
    description: 'An Act to provide for the more effective prevention of certain unlawful activities of individuals and associations and for matters connected therewith.',
    year: 1967,
    act_no: 37,
    category: 'Criminal Law'
  },
  {
    id: 'national-security-1980',
    title: 'The National Security Act, 1980',
    description: 'An Act to provide for preventive detention in certain cases and for matters connected therewith.',
    year: 1980,
    act_no: 65,
    category: 'Criminal Law'
  },
  {
    id: 'arms-1959',
    title: 'The Arms Act, 1959',
    description: 'An Act to consolidate and amend the law relating to arms and ammunition.',
    year: 1959,
    act_no: 54,
    category: 'Criminal Law'
  },
  {
    id: 'explosives-1884',
    title: 'The Explosives Act, 1884',
    description: 'An Act to regulate the manufacture, possession, use, sale, transport, import and export of explosives.',
    year: 1884,
    act_no: 4,
    category: 'Criminal Law'
  },
  {
    id: 'explosive-substances-1908',
    title: 'The Explosive Substances Act, 1908',
    description: 'An Act further to amend the law relating to explosive substances.',
    year: 1908,
    act_no: 6,
    category: 'Criminal Law'
  },
  {
    id: 'dowry-prohibition-1961',
    title: 'The Dowry Prohibition Act, 1961',
    description: 'An Act to prohibit the giving or taking of dowry.',
    year: 1961,
    act_no: 28,
    category: 'Family Law'
  },
  {
    id: 'immoral-traffic-1956',
    title: 'The Immoral Traffic (Prevention) Act, 1956',
    description: 'An Act to provide in pursuance of the International Convention signed at New York on the 9th day of May, 1950, for the prevention of immoral traffic.',
    year: 1956,
    act_no: 104,
    category: 'Criminal Law'
  },
  {
    id: 'pcpndt-1994',
    title: 'The Pre-natal Diagnostic Techniques (Regulation and Prevention of Misuse) Act, 1994',
    description: 'An Act to provide for the regulation of the use of pre-natal diagnostic techniques for the purpose of detecting genetic or metabolic disorders or chromosomal abnormalities or certain congenital malformations or sex-linked disorders and for the prevention of the misuse of such techniques for the purpose of pre-natal sex determination leading to female foeticide.',
    year: 1994,
    act_no: 57,
    category: 'Medical Law'
  },
  {
    id: 'commission-of-sati-1987',
    title: 'The Commission of Sati (Prevention) Act, 1987',
    description: 'An Act to provide for the more effective prevention of the commission of sati and its glorification and for matters connected therewith or incidental thereto.',
    year: 1988,
    act_no: 3,
    category: 'Criminal Law'
  },
  {
    id: 'representation-of-people-1950',
    title: 'The Representation of the People Act, 1950',
    description: 'An Act to provide for the allocation of seats in, and the delimitation of constituencies for the purpose of election to, the House of the People and the Legislatures of States, the qualifications of voters at such elections, the preparation of electoral rolls, the manner of filling seats in the Council of States to be filled by representatives of Union territories, and matters connected therewith.',
    year: 1950,
    act_no: 43,
    category: 'Election Law'
  },
  {
    id: 'representation-of-people-1951',
    title: 'The Representation of the People Act, 1951',
    description: 'An Act to provide for the conduct of elections to the Houses of Parliament and to the House or Houses of the Legislature of each State, the qualifications and disqualifications for membership of those Houses, the corrupt practices and other offences at or in connection with such elections and the decision of doubts and disputes arising out of or in connection with such elections.',
    year: 1951,
    act_no: 43,
    category: 'Election Law'
  },
  {
    id: 'delhi-special-police-1946',
    title: 'The Delhi Special Police Establishment Act, 1946',
    description: 'An Act to make provision for the constitution of a special police force in Delhi for the investigation of certain offences in the Union Territories.',
    year: 1946,
    act_no: 25,
    category: 'Administrative Law'
  },
  {
    id: 'cbi-1946',
    title: 'The Central Vigilance Commission Act, 2003',
    description: 'An Act to provide for the constitution of a Central Vigilance Commission to inquire or cause inquiries to be conducted into offences alleged to have been committed under the Prevention of Corruption Act, 1988.',
    year: 2003,
    act_no: 45,
    category: 'Administrative Law'
  },
  {
    id: 'lokpal-lokayuktas-2013',
    title: 'The Lokpal and Lokayuktas Act, 2013',
    description: 'An Act to provide for the establishment of a body of Lokpal for the Union and Lokayukta for States to inquire into allegations of corruption against certain public functionaries.',
    year: 2014,
    act_no: 1,
    category: 'Administrative Law'
  },
  {
    id: 'whistle-blowers-2014',
    title: 'The Whistle Blowers Protection Act, 2014',
    description: 'An Act to establish a mechanism to receive complaints relating to disclosure on any allegation of corruption or wilful misuse of power or wilful misuse of discretion against any public servant and to inquire or cause an inquiry into such disclosure and to provide adequate safeguards against victimisation of the person making such complaint.',
    year: 2014,
    act_no: 17,
    category: 'Administrative Law'
  },
  {
    id: 'administrative-tribunals-1985',
    title: 'The Administrative Tribunals Act, 1985',
    description: 'An Act to provide for the adjudication or trial by Administrative Tribunals of disputes and complaints with respect to recruitment and conditions of service of persons appointed to public services and posts.',
    year: 1985,
    act_no: 13,
    category: 'Administrative Law'
  },
  {
    id: 'easements-1882',
    title: 'The Indian Easements Act, 1882',
    description: 'An Act to define and amend the law relating to Easements and Licenses.',
    year: 1882,
    act_no: 5,
    category: 'Property Law'
  },
  {
    id: 'registration-1908',
    title: 'The Registration Act, 1908',
    description: 'An Act to consolidate the enactments relating to the registration of documents.',
    year: 1908,
    act_no: 16,
    category: 'Property Law'
  },
  {
    id: 'stamp-1899',
    title: 'The Indian Stamp Act, 1899',
    description: 'An Act to consolidate and amend the law relating to Stamps.',
    year: 1899,
    act_no: 2,
    category: 'Property Law'
  },
  {
    id: 'court-fees-1870',
    title: 'The Court-fees Act, 1870',
    description: 'An Act for levying fees for the service of processes by the Courts and to regulate the costs of those processes.',
    year: 1870,
    act_no: 7,
    category: 'Procedural Law'
  },
  {
    id: 'suits-valuation-1887',
    title: 'The Suits Valuation Act, 1887',
    description: 'An Act to prescribe the mode of valuing certain suits for the purpose of determining the jurisdiction of Courts with respect thereto.',
    year: 1887,
    act_no: 7,
    category: 'Procedural Law'
  },
  {
    id: 'general-clauses-1897',
    title: 'The General Clauses Act, 1897',
    description: 'An Act to consolidate and extend the General Clauses Acts, 1868 and 1887.',
    year: 1897,
    act_no: 10,
    category: 'Procedural Law'
  },
  {
    id: 'contempt-of-courts-1971',
    title: 'The Contempt of Courts Act, 1971',
    description: 'An Act to define and limit the powers of certain courts in punishing contempts of courts and to regulate their procedure in relation thereto.',
    year: 1971,
    act_no: 70,
    category: 'Procedural Law'
  }
];

export const learningPaths: LearningPath[] = [
    {
        id: 'lp-criminal-law',
        title: 'Introduction to Criminal Law',
        description: 'Understand the fundamentals of criminal law in India, including key concepts, major crimes, and defenses.',
        category: 'Beginner',
        modules: 5,
        duration: '4 Weeks'
    },
    {
        id: 'lp-contract-law',
        title: 'Mastering Contract Law',
        description: 'A deep dive into the Indian Contract Act, 1872. Learn about formation, breach, and remedies of contracts.',
        category: 'Intermediate',
        modules: 8,
        duration: '6 Weeks'
    },
    {
        id: 'lp-constitutional-law',
        title: 'Exploring the Constitution',
        description: 'Learn about the framework of the Indian government, fundamental rights, and directive principles.',
        category: 'Beginner',
        modules: 6,
        duration: '5 Weeks'
    },
    {
        id: 'lp-procedural-law',
        title: 'Civil & Criminal Procedures',
        description: 'Get acquainted with the Code of Civil Procedure (CPC) and the Code of Criminal Procedure (CrPC).',
        category: 'Advanced',
        modules: 10,
        duration: '8 Weeks'
    }
]
