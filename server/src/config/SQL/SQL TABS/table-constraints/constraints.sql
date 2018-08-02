-- fk for password_id in Users table
alter table Users
add constraint fk_UserPasswordid
foreign key (passwordid)
references Passwords(id);
-- fk for userid in UserReviews table
alter table UserReviews
add constraint fk_UseridUserReview
foreign key (userid)
references Users(id);
-- fk for userid in UserDiets table
alter table UserDiets
add constraint fk_UseridUserDiet
foreign key (userid)
references Users(id);
-- fk for dietid in UserDiets table
alter table UserDiets
add constraint fk_DietidUserDiet
foreign key (dietid)
references Diets(id);
-- fk for userid in Favorites table
alter table UserFavorites
add constraint fk_UseridFavorites
foreign key (userid)
references Users(id);

-- fk for userid in Tokens table
alter table Tokens
add constraint fk_UseridTokens
foreign key (userid)
references Users(id);