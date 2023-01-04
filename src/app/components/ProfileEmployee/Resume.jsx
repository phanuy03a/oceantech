import React from "react";
import { Icon } from "@mui/material";
import CustomAvatar from "../Avatar/Avatar";
function Resume(props) {
  return (
    <div>
      <div>
        <div class="resume">
          <div class="resume_left">
            <div class="resume_profile">
              <CustomAvatar image={"assets/images/face-1.png"} />
            </div>
            <div class="resume_content">
              <div class="resume_item resume_info">
                <div class="title">
                  <p class="bold"> Bùi Trịnh Quang Huy</p>
                  <p class="regular">Front-end Developer</p>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <Icon>map</Icon>
                    </div>
                    <div class="data">Hà Nội</div>
                  </li>
                  <li>
                    <div class="icon">
                      <Icon>phone</Icon>
                    </div>
                    <div class="data"> 0324445678</div>
                  </li>
                  <li>
                    <div class="icon">
                      <Icon>mail</Icon>
                    </div>
                    <div class="data">stephen@gmail.com</div>
                  </li>
                  <li>
                    <div class="icon">
                      <Icon>web</Icon>
                    </div>
                    <div class="data">www.stephen.com</div>
                  </li>
                </ul>
              </div>
              <div class="resume_item resume_skills">
                <div class="title">
                  <p class="bold">Kĩ Năng</p>
                </div>
                <ul>
                  <li>
                    <div class="skill_name">HTML/CSS/JS</div>
                  </li>
                </ul>
              </div>
              <div class="resume_item resume_social">
                <div class="title">
                  <p class="bold">Mạng xã hội</p>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <i class="fab fa-facebook-square"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Facebook</p>
                      <p>Stephen@facebook</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fab fa-twitter-square"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Twitter</p>
                      <p>Stephen@twitter</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fab fa-youtube"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Youtube</p>
                      <p>Stephen@youtube</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Linkedin</p>
                      <p>Stephen@linkedin</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="resume_right">
            <div class="resume_item resume_about">
              <div class="title">
                <p class="bold">Giới thiệu chung</p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit
                officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?
              </p>
            </div>
            <div class="resume_item resume_work">
              <div class="title">
                <p class="bold">Kinh nghiệm làm việc</p>
              </div>
              <ul>
                <li>
                  <div class="date">2013 - 2015</div>
                  <div class="info">
                    <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                      voluptatibus!
                    </p>
                  </div>
                </li>
                <li>
                  <div class="date">2015 - 2017</div>
                  <div class="info">
                    <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                      voluptatibus!
                    </p>
                  </div>
                </li>
                <li>
                  <div class="date">2017 - Present</div>
                  <div class="info">
                    <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                      voluptatibus!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="resume_item resume_education">
              <div class="title">
                <p class="bold">Học vấn</p>
              </div>
              <ul>
                <li>
                  <div class="date">2010 - 2013</div>
                  <div class="info">
                    <p class="semi-bold">Web Designing (Texas University)</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                      voluptatibus!
                    </p>
                  </div>
                </li>
                <li>
                  <div class="date">2000 - 2010</div>
                  <div class="info">
                    <p class="semi-bold">Texas International School</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                      voluptatibus!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item">
              <div class="title">
                <p class="bold">Sở Thích</p>
                <ul>
                  <li>Chơi Brawlhalla</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
