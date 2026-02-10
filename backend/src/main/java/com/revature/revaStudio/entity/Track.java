package com.revature.revaStudio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "track")
public class Track {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "track_id",nullable = false)
    private Integer trackId;

    @Column(name = "name", nullable = false)
    private String trackName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "album_id", nullable = false)
    private Album album;

    @Column(name = "composer", nullable = false)
    private String composer;

    @Column(name = "milliseconds", nullable = false)
    private Integer milliseconds;

}
