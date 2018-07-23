-- -- PROCEDURES FOR STORAGES TABLE
-- READ ALL USERS
drop procedure if exists spGetAllStorages;
delimiter $$
create procedure spGetAllStorages()
begin

select * from Storages;

end $$
delimiter ;
-- READ INDIVIDUAL Storage
drop procedure if exists spGetStorage;
delimiter $$
create procedure spGetStorage(p_id int)
begin

select * from Storages
where id = p_id;

end $$
delimiter ;
-- CREATE Storage
drop procedure if exists spCreateStorage;
delimiter $$
create procedure spCreateStorage(p_container varchar(256), p_itemname varchar(256))
begin

insert into Storages(container, itemname)
values(p_container, p_itemname);
select last_insert_id() as id;
end $$
delimiter ;
-- UPDATE Storage
drop procedure if exists spUpdateStorage;
delimiter $$
create procedure spUpdateStorage (p_id int, p_container varchar(256), p_itemname varchar(256))
begin

UPDATE Storages
set
    container = coalesce(p_container, container),
    itemname = coalesce(p_itemname, itemname)
where id = p_id;

end $$
delimiter ;
-- DELETE Storage
drop procedure if exists spDeleteStorage;
delimiter $$
create procedure spDeleteStorage(p_id int)
begin

delete from Storages
where id = p_id;

end $$
delimiter ;

