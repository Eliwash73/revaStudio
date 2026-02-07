package com.revature.revaStudio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "artist")
public class Artist {

    @Id
    @Column(name = "artist_id")
    private Integer artistId;

    @Column(name = "name")
    private String artistName;
}
