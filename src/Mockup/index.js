import onepiece from '../assets/onepiece.jpg';
import naruto from '../assets/Naruto.jpg';
import attackOnTitan from '../assets/attackontitan.jpg';
import myHeroAcademia from '../assets/myheroacademia.jpg';
import dragonBall from '../assets/dragonball.jpg';
import tokyoGhoul from '../assets/tokyoghoul.jpg';
import deathNote from '../assets/deathnote.jpg';
import demonSlayer from '../assets/demonslayer.jpg';
import fullmetalAlchemist from '../assets/fullmetalalchemist.jpg';
import bleach from '../assets/bleach.jpg';
import hunterxhunter from '../assets/hunterxhunter.webp';
import onepunchman from '../assets/onepunchman.jpg';
import fairyTail from '../assets/fairytail.png';
import blackClover from '../assets/blackclover.jpg';
import jojosBizarreAdventure from '../assets/jojosbizarreadventure.jpg';
import haikyuu from '../assets/haikyuu.jpg';
import promisedNeverland from '../assets/promisedneverland.jpg';
import drStone from '../assets/drstone.jpeg';
import blueExorcist from '../assets/blueexorcist.jpeg';
import vinlandSaga from '../assets/vinlandsaga.jpeg';
import jujutsuKaisen from '../assets/jujutsukaisen.jpeg';
import magi from '../assets/magi.jpeg';
import swordArtOnline from '../assets/swordartonline.jpeg';
import blackButler from '../assets/blackbutler.jpeg';
import noragami from '../assets/noragami.jpeg';
import goblinSlayer from '../assets/goblinslayer.jpeg';
import reZero from '../assets/rezero.jpeg';
import fireForce from '../assets/fireforce.jpeg';
import tokyoRevengers from '../assets/tokyorevengers.jpeg';
import mobPsycho100 from '../assets/mobpsycho100.jpeg';
import dorohedoro from '../assets/dorohedoro.jpeg';
import shieldHero from '../assets/shieldhero.jpeg';
import kaguyaSama from '../assets/kaguyasama.jpeg';
import beastars from '../assets/beastars.jpeg';
import goldenKamuy from '../assets/goldenkamuy.jpeg';
import silentVoice from '../assets/silentvoice.jpeg';
import seraphOfTheEnd from '../assets/seraphoftheend.jpeg';
import myYouthRomanticComedy from '../assets/myyouthromanticcomedy.jpeg';
import vagabond from '../assets/vagabond.jpeg';
import berserk from '../assets/berserk.jpg';
import mushokuTensei from '../assets/mushokutensei.jpg';
import aotuWorld from '../assets/aotuworld.jpeg';
import platinumEnd from '../assets/platinumend.jpg';
import grandBlue from '../assets/grandblue.jpeg';
import quintuplets from '../assets/quintuplets.jpeg';
import reincarnatedSlime from '../assets/reincarnatedslime.jpeg';
import madeInAbyss from '../assets/madeinabyss.jpeg';
import magicHighSchool from '../assets/magichighschool.jpeg';
import konosuba from '../assets/konosuba.jpeg';


const mangaData = [
  { id: 1, title: 'One Piece', price: 10.99, image: onepiece, description: 'Rejoignez Luffy dans ses aventures de pirate.' },
  { id: 2, title: 'Naruto', price: 9.99, image: naruto, description: 'Suivez Naruto dans son voyage pour devenir un ninja.' },
  { id: 3, title: 'Attack on Titan', price: 12.99, image: attackOnTitan, description: 'L umanité lutte pour sa survie contre des créatures humanoïdes géantes.' },
  { id: 4, title: 'My Hero Academia', price: 11.49, image: myHeroAcademia, description: 'Izuku Midoriya s efforce de devenir le plus grand héros.' },
  { id: 5, title: 'Dragon Ball', price: 8.99, image: dragonBall, description: 'Les aventures de Goku pour devenir le guerrier le plus fort.' },
  { id: 6, title: 'Tokyo Ghoul', price: 10.79, image: tokyoGhoul, description: 'Ken Kaneki lutte entre l humanité et les instincts de goule.' },
  { id: 7, title: 'Death Note', price: 11.99, image: deathNote, description: 'Découvrez le pouvoir et les conséquences du Death Note.' },
  { id: 8, title: 'Demon Slayer', price: 13.99, image: demonSlayer, description: 'La quête de Tanjiro Kamado pour sauver sa sœur des démons.' },
  { id: 9, title: 'Fullmetal Alchemist', price: 10.49, image: fullmetalAlchemist, description: 'Deux frères cherchent la Pierre Philosophale dans un monde steampunk.' },
  { id: 10, title: 'Bleach', price: 9.79, image: bleach, description: 'Ichigo Kurosaki combat les esprits maléfiques en tant que Faucheur d Âmes.' },
  { id: 11, title: 'Hunter x Hunter', price: 12.49, image: hunterxhunter, description: 'Gon Freecss poursuit son rêve de devenir un Chasseur.' },
  { id: 12, title: 'One Punch Man', price: 11.29, image: onepunchman, description: 'Saitama défait ses ennemis d un seul coup dans un monde de super-héros.' },
  { id: 13, title: 'Fairy Tail', price: 9.69, image: fairyTail, description: 'Natsu Dragneel et ses amis se lancent dans des aventures magiques.' },
  { id: 14, title: 'Black Clover', price: 10.19, image: blackClover, description: 'Asta sefforce de devenir le Roi Sorcier dans un monde de magie.' },
  { id: 15, title: 'JoJo\'s Bizarre Adventure', price: 12.79, image: jojosBizarreAdventure, description: 'La famille Joestar combat des menaces surnaturelles à travers les générations.' },
  { id: 16, title: 'Haikyuu!!', price: 9.39, image: haikyuu, description: 'Hinata Shoyo voyage pour devenir un joueur de volley-ball de premier plan.' },
  { id: 17, title: 'The Promised Neverland', price: 13.49, image: promisedNeverland, description: 'Des enfants tentent de s échapper d un sinistre orphelinat.' },
  { id: 18, title: 'Dr. Stone', price: 11.89, image: drStone, description: 'Senku Ishigami reconstruit la civilisation avec la science après un événement mystérieux.' },
  { id: 19, title: 'Blue Exorcist', price: 10.09, image: blueExorcist, description: 'Rin Okumura combat les démons en tant que fils de Satan.' },
  { id: 20, title: 'Vinland Saga', price: 12.29, image: vinlandSaga, description: 'Thorfinn cherche la vengeance à l âge viking.' },
  { id: 21, title: 'Jujutsu Kaisen', price: 11.69, image: jujutsuKaisen, description: 'Yuji Itadori combat les malédictions dans une école de sorcellerie.' },
  { id: 22, title: 'Magi: The Labyrinth of Magic', price: 10.59, image: magi, description: 'Aladdin et Alibaba explorent des donjons dans un monde fantastique.' },
  { id: 23, title: 'Sword Art Online', price: 12.09, image: swordArtOnline, description: 'Les joueurs piégés dans un MMORPG de réalité virtuelle doivent lutter pour survivre.' },
  { id: 24, title: 'Black Butler', price: 9.99, image: blackButler, description: 'Ciel Phantomhive et son majordome démon résolvent des mystères dans l Angleterre victorienne.' },
  { id: 25, title: 'Noragami', price: 11.19, image: noragami, description: 'Yato, un dieu mineur, prend des petits boulots pour devenir un dieu vénéré.' },
  { id: 26, title: 'Promised Neverland', price: 10.49, image: promisedNeverland, description: 'Des enfants tentent de échapper d un sinistre orphelinat.' },
  { id: 27, title: 'Goblin Slayer', price: 12.99, image: goblinSlayer, description: 'Un aventurier combat les gobelins dans un monde de dark fantasy.' },
  { id: 28, title: 'Re:Zero - Starting Life in Another World', price: 11.39, image: reZero, description: 'Subaru Natsuki revit sa vie dans un monde fantastique après la mort.' },
  { id: 29, title: 'Fire Force', price: 10.79, image: fireForce, description: 'Les pompiers combattent des créatures infernales dans un monde de combustion humaine spontanée.' },
  { id: 30, title: 'Tokyo Revengers', price: 12.29, image: tokyoRevengers, description: 'Un homme découvre qu il peut voyager dans le temps jusqu à ses années de collège.' },
  { id: 31, title: 'Mob Psycho 100', price: 9.89, image: mobPsycho100, description: 'Shigeo Kageyama navigue dans la vie en tant que puissant télépathe.' },
  { id: 32, title: 'Dorohedoro', price: 11.69, image: dorohedoro, description: 'Un homme à tête de lézard cherche à retrouver ses souvenirs.' },
  { id: 33, title: 'The Rising of the Shield Hero', price: 10.19, image: shieldHero, description: 'Naofumi Iwatani élève au pouvoir dans un monde fantastique avec son bouclier.' },
  { id: 34, title: 'Kaguya-sama: Love Is War', price: 12.49, image: kaguyaSama, description: 'Deux étudiants engagent dans des batailles psychologiques pour faire avouer leur amour à l autre.' },
  { id: 35, title: 'Beastars', price: 11.29, image: beastars, description: 'Des animaux anthropomorphes naviguent dans les défis une société divisée.' },
  { id: 36, title: 'Golden Kamuy', price: 10.99, image: goldenKamuy, description: 'Un récit de chasse au trésor dans le Hokkaido après-guerre.' },
  { id: 37, title: 'A Silent Voice', price: 9.79, image: silentVoice, description: 'Une histoire de rédemption et de pardon entre un intimidateur et sa victime.' },
  { id: 38, title: 'Seraph of the End', price: 12.79, image: seraphOfTheEnd, description: 'humanité combat les vampires dans un monde post-apocalyptique.' },
  { id: 39, title: 'My Youth Romantic Comedy Is Wrong, As I Expected', price: 11.19, image: myYouthRomanticComedy, description: 'Hachiman Hikigaya navigue dans les relations au lycée avec une perspective cynique.' },
  { id: 40, title: 'Vagabond', price: 10.49, image: vagabond, description: 'Un compte fictif de la vie de Miyamoto Musashi.' },
  { id: 41, title: 'Berserk', price: 13.49, image: berserk, description: 'Guts se bat à travers un monde de dark fantasy rempli de démons et de corruption.' },
  { id: 42, title: 'Mushoku Tensei: Jobless Reincarnation', price: 11.89, image: mushokuTensei, description: 'Un homme a une deuxième chance de vie dans un monde magique.' },
  { id: 43, title: 'AOTU World', price: 10.09, image: aotuWorld, description: 'Aventures dans un jeu de réalité virtuelle avec un système de niveau unique.' },
  { id: 44, title: 'Platinum End', price: 12.29, image: platinumEnd, description: 'Un garçon reçoit des pouvoirs angéliques et doit participer à une compétition mortelle.' },
  { id: 45, title: 'Grand Blue', price: 11.69, image: grandBlue, description: 'Une comédie sur la vie universitaire, l amitié et la plongée.' },
  { id: 46, title: 'The Quintessential Quintuplets', price: 10.59, image: quintuplets, description: 'Un lycéen donne des cours particuliers à des quintuplés aux personnalités distinctes.' },
  { id: 47, title: 'That Time I Got Reincarnated as a Slime', price: 12.09, image: reincarnatedSlime, description: 'Satoru Mikami renaît dans un monde fantastique en tant que slime puissant.' },
  { id: 48, title: 'Made in Abyss', price: 9.99, image: madeInAbyss, description: 'Exploration d un abîme mystérieux et dangereux.' },
  { id: 49, title: 'The Irregular at Magic High School', price: 11.19, image: magicHighSchool, description: 'Frères et sœurs naviguent au lycée dans un monde de magie et de technologie.' },
  { id: 50, title: 'KonoSuba: God  Blessing on This Wonderful World!', price: 10.39, image: konosuba , description: 'Un conte comique d aventuriers dans un monde fantastique.' },
];

export default mangaData;
