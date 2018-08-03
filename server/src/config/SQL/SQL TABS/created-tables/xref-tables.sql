-- USER DIET
drop table if exists UserDiets;
create table UserDiets (
id int not null auto_increment primary key,
dietid int not null,
userid int not null
);
-- USER REVIEWS TABLE
drop table if exists UserReviews;
create table UserReviews (
id int not null auto_increment primary key,
recipeid varchar(256) not null,
userid int not null,
review text not null,
ratings int not  null
);
-- USER FAVORITES TABLE
drop table if exists UserFavorites;
create table UserFavorites (
id int not null auto_increment primary key,
recipeid varchar(256) not null,
userid int not null

);
-- USER HISTORY TABLE
drop table if exists UserHistory;
create table UserHistory (
id int not null auto_increment primary key,
userid int not null,
previousorder text not null
);
-- USER ALLERGIES TABLE
drop table if exists UserAllergies;
create table UserAllergies (
id int not null auto_increment primary key,
userid int not null,
allergy varchar(256) not null
);

-- USER/STORAGE CROSS REFERNECE
drop table if exists UserStorage;
create table UserStorage (
id int not null auto_increment primary key,
userid int not null,
storageid int not null
);
-- TOKENS TABLE
drop table if exists Tokens;
create table Tokens (
    id int not null auto_increment primary key,
    userid int not null
);