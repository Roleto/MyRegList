CREATE TABLE [dbo].[Item] (
    [Id]          INT        NOT NULL IDENTITY,
    [Name]        NCHAR (10) NOT NULL,
    [Description] NCHAR (10) NOT NULL,
    [ImageUrl]    NCHAR (10) NULL,
    [Type]        NCHAR (10) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

