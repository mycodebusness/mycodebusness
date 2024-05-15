"use client";
import React from "react";

class TimelineEntry {
  constructor(id, start, end, description, skills, pic) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.description = description;
    this.skills = skills;
    this.pic = pic;
  }
}

export const DUMMY_DATA = [
  new TimelineEntry(
    "t1",
    "2020",
    "2023",
    "My most recent timeline entry. This is the description of all the things I have done in this time period. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ["more HTML", "more CSS", "more JS"],
    "https://paul7dxb.github.io/hosted-assets/SomePNGs/web.png"
  ),
  new TimelineEntry(
    "t2",
    "2000",
    "2020",
    "My second timeline entry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ["HTML", "CSS", "JS"],
    "https://paul7dxb.github.io/hosted-assets/SomePNGs/hacker.png"
  ),
  new TimelineEntry(
    "t3",
    "1990",
    "1999",
    "Another timeline entry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ["General Computer Skills"],
    "https://paul7dxb.github.io/hosted-assets/SomePNGs/computer.png"
  ),
  new TimelineEntry(
    "t4",
    "1980",
    "1990",
    "A long time ago. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ["Growing up"],
    "https://paul7dxb.github.io/hosted-assets/SomePNGs/baby.png"
  ),
  new TimelineEntry(
    "t5",
    "1972",
    "1979",
    "This really is a long time ago. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ["Growing up"],
    "https://paul7dxb.github.io/hosted-assets/SomePNGs/history.png"
  ),
  new TimelineEntry(
    "t6",
    "1961",
    "1975",
    "Getting to the moon. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ["Flying", "Space Travel", "Zero Gravity"],
    "https://paul7dxb.github.io/hosted-assets/SomePNGs/nasa.png"
  ),
  new TimelineEntry(
    "t7",
    "1876",
    "1999",
    "Wow I'm old",
    ["There's no computers back here!"],
    "https://paul7dxb.github.io/hosted-assets/SomePNGs/jurrasic-park-logo.png"
  ),
];

export class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.events.map((event, index) => (
      <TimeLineCard
        index={index}
        key={event.id}
        start={event.start}
        end={event.end}
        description={event.description}
        skills={event.skills}
        pic={event.pic}
      />
    ));
  }
}

class TimeLineCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardClass = `timelineCard ${props.index % 2 ? "right" : "left"} `;
    this.imageDivClass = `imageCropper ${props.index % 2 ? "" : "imageLeft"} `;
  }
  render() {
    return (
      <div className={this.cardClass}>
        <div className="content">
          <h2>
            {this.props.start} - {this.props.end}
          </h2>
          <p>{this.props.description}</p>
          <Skills skills={this.props.skills} />
          <div className={this.imageDivClass}>
            <img
              className="cardPic"
              src={this.props.pic}
              alt="Icon for timeline"
            />
          </div>
        </div>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div>
        <span>Skills: </span>
        {Array.from(this.props.skills).map((skill, index) => (
          <SkillItem skill={skill} />
        ))}
      </div>
    );
  }
}

class SkillItem extends React.Component {
  render() {
    return <span className="skill">{this.props.skill}</span>;
  }
}
