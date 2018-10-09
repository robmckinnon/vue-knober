<template>
  <canvas
    ref="canvas"
    :width="Number(this.size)"
    :height="Number(this.size)">
  </canvas>
</template>

<script>
import throttle from 'lodash.throttle';

export default {
  name: 'vue-knober',
  data: function () {
    return {
      margin: 0,
      chassisSize: 0,
      knobSize: 0,
      ctx: null,
      initialAngle: -30,
      currentValue: this.value
    };
  },
  props: {
    size: {
      type: [String, Number],
      default: 250
    },
    value: {
      type: [String, Number],
      default: 0
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 255
    },
    primaryColor: {
      type: String,
      default: '#79bd9a'
    },
    diffColor: {
      type: String,
      default: '#cff0da'
    },
    quenchColor: {
      type: String,
      default: '#eee'
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    shadowColor: {
      type: String,
      default: '#aaa'
    },
    fontColor: {
      tyle: String,
      default: '#999'
    }
  },
  computed: {
    range () {
      return this.max - this.min;
    }
  },
  created () {
    const size = Number(this.size);
    this.margin = size * .1;
    this.chassisSize = size / 2 - this.margin;
    this.knobSize = this.chassisSize * .4;
  },
  methods: {
    calculateRenderParams (x, y) {
      const size = this.size;
      const coorX = x - size / 2;
      const coorY = y - size / 2;
      const r = Math.sqrt(Math.pow(Math.abs(coorX), 2) + Math.pow(Math.abs(coorY), 2));
      let angle = Math.atan2(coorY, coorX) * 180 / Math.PI - 180;
      if (angle < -180) {
        angle = Math.abs(angle + 360);
      }
      return {
        r,
        angle,
        coorX,
        coorY
      };
    },
    move: throttle(function (config) {
      const { angle, r, coorX, coorY } = config;
      if (angle < -180) {
        angle = Math.abs(angle + 360);
      }

      if (r < this.chassisSize) {
        this.draw(angle, r, coorX, coorY);
      } else {
        this.draw();
      }
    }, 40, { 'trailing': false }),
    calculateValue (angle ) {
      const base = (this.range / 240);
      let newVal;

      if (angle > 0) {
        newVal = base * (angle + 30);
      } else if (angle >= -30) {
        newVal = base * (30 + angle);
      } else if (angle <= -150) {
        newVal = base * (210 + angle + 180);
      }

      newVal = Number(newVal && newVal.toFixed(0))

      return newVal + Number(this.min);
    },
    press (config) {
      const { angle, r, coorX, coorY } = config;
      const val = this.calculateValue(angle);

      if (r > this.chassisSize) return;

      if (r <= this.knobSize) {
        this.currentValue > Number(this.min) ? (this.currentValue = this.min) : (this.currentValue = this.max);
        return;
      }

      if (val) {
        this.initialAngle = angle;
        this.currentValue = Number(val);
      }
    },
    drawKnob (angle, r, coorX, coorY) {
      const self = this;
      const size = self.knobSize;
      const ctx = this.ctx;

      if (
        (angle === undefined)
        || (angle < -30 && angle > -150)
      ) {
        angle = this.initialAngle;
      } else if (r > self.knobSize) {
        if (r >= self.knobSize && angle < 0) {
          if (angle <= -30 && angle >= -90) {
            angle = -30;
          } else if (angle > -150 && angle < -90) {
            angle = -150;
          }
        }
      }

      drawBackground();
      if (!r || r > this.knobSize) {
        drawTick();
      }
      drawSwitch();

      function drawBackground() {
        const blur = r < self.knobSize ? size * .2 : size * .5;
        const offset = r < self.knobSize ? size * .05 : size * .1;
        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2, true);
        ctx.shadowBlur = blur;
        ctx.shadowColor = self.shadowColor;
        ctx.shadowOffsetX = offset;
        ctx.shadowOffsetY = offset;
        ctx.fillStyle = self.backgroundColor;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
      function drawTick () {

        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.rotate(angle * Math.PI / 180);
        ctx.rotate(0);
        ctx.beginPath();
        ctx.moveTo(-size * .6, 0);
        ctx.lineTo(-size * .9, 0);
        ctx.lineWidth = self.size * .015;
        ctx.strokeStyle = self.primaryColor;
        ctx.stroke();
        ctx.closePath();

        ctx.restore();
      }
      function drawSwitch () {
        const switchSize = self.knobSize * .3;
        let color = self.quenchColor;

        if (r < self.knobSize) {
          if (self.currentValue > 0) {
            color = '#fe4365';
          } else {
            color = self.primaryColor;
          }
        }

        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.rotate(-125 * Math.PI / 180);
        ctx.beginPath();
        ctx.arc(0, 0, self.knobSize * .3, 0, Math.PI * 2 - 5, true);
        ctx.lineWidth = switchSize * .2;
        ctx.strokeStyle = color;
        ctx.shadowBlur = switchSize * .3;
        ctx.shadowColor = color;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.translate(self.size / 2, self.size / 2);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -switchSize * 1.2);
        ctx.lineWidth = switchSize * .2;
        ctx.strokeStyle = color;
        ctx.shadowBlur = switchSize * .3;
        ctx.shadowColor = color;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
      }
    },
    drawDashboard (angle, r, coorX, coorY) {
      const self = this;
      const ctx = self.ctx;
      const size = self.size;
      const chassisSize = self.chassisSize;
      
      angle = angle + 30;

      if (angle < 0) {
        angle = 360 + angle;
      }

      drawChassis();
      drawTicks();

      function drawChassis () {
        ctx.save();
        ctx.translate(size / 2, size / 2);
        ctx.beginPath();
        ctx.arc(0, 0, chassisSize, 0, Math.PI * 2, true);
        ctx.shadowBlur = chassisSize * .16;
        ctx.shadowOffsetX = chassisSize * .03;
        ctx.shadowOffsetY = chassisSize * .03;
        ctx.shadowColor = self.shadowColor;
        ctx.fillStyle = self.backgroundColor;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }

      function drawTicks () {
        const gap = 240 / 30;

        ctx.save();
        ctx.translate(size / 2, size / 2);
        ctx.rotate(-30 * Math.PI / 180);

        let i = 0;

        while(i <= 30) {
          const start = -self.knobSize - chassisSize * .1;
          const end = i % 3 === 0 ? -chassisSize * .9 : -chassisSize * .75;
          const weight = i % 3 === 0 ? 2 : 1.5;
          const _angle = i * gap;


          let color = self.quenchColor;
          let shadowColor = '#fff';

          const setColor = (c, shadow) => () => {
            color = c;
            shadowColor = shadow;
          };
          const setDiffColor = setColor(self.diffColor, self.diffColor);
          const setPrimaryColor = setColor(self.primaryColor, self.primaryColor);

 
          if (angle) {
            if (r > self.knobSize) {
              let isCheck = false;
              let isDiff = false;

              if (angle > 240) {
                if (_angle <= self.initialAngle + 30 && self.currentValue > 0) {
                  setPrimaryColor();
                }
              } else {
                if (self.currentValue <= self.min) {
                  if (_angle < self.initialAngle + 30 && _angle < angle) {
                    setPrimaryColor();
                  } else if (_angle <= self.initialAngle + 30 || _angle <= angle) {
                    setDiffColor();
                  }
                } else {
                  if (_angle <= self.initialAngle + 30 && _angle <= angle) {
                    setPrimaryColor();
                  } else if (_angle <= self.initialAngle + 30 || _angle <= angle) {
                    setDiffColor();
                  }
                }
              }
            } else {
              if (_angle <= self.initialAngle + 30 && self.currentValue !== 0) {
                setDiffColor();
              }
            }
          } else {
            if (self.currentValue <= self.min) {
              if (_angle < self.initialAngle + 30) {
                setPrimaryColor();
              }
            } else {
              if (_angle <= self.initialAngle + 30) {
                setPrimaryColor();
              }
            }
          }


          ctx.rotate(i === 0 ? 0 : gap * Math.PI / 180);
          ctx.beginPath();
          ctx.moveTo(start, 0);
          ctx.lineTo(end, 0);
          ctx.lineWidth = weight;

          ctx.shadowBlur = chassisSize * .05;
          ctx.shadowColor = shadowColor;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;

          ctx.strokeStyle = color;
          ctx.stroke();

          ctx.closePath();
          i++;
        };

        ctx.restore();
      }
    },
    drawlabel (angle, r, coorX, coorY) {
      const ctx = this.ctx;
      let val = this.currentValue;

      if (angle && angle <= 240 && r > this.knobSize) {
        const _val = this.calculateValue(angle);
        _val && (val = _val);
      }

      ctx.save();

      ctx.translate(this.size / 2, this.size / 2 + this.chassisSize * .8);

      ctx.fillStyle = this.fontColor;
      ctx.textAlign = 'center';
      ctx.font = `${this.chassisSize * .3}px Arial`;
      ctx.fillText(val, 0, 0);

      ctx.restore();
    },
    draw (angle, r, coorX, coorY) {
      this.ctx.clearRect(0, 0, this.size, this.size);
      this.drawDashboard(angle, r, coorX, coorY);
      this.drawKnob(angle, r, coorX, coorY);
      this.drawlabel(angle, r, coorX, coorY);
    },
    watchCurrentValueHandler (val) {
      const randerScale = 240;
      let angle = randerScale / this.range * (val - this.min) - 30;
      if (angle > 180) {
        angle -= 360;
      }

      this.initialAngle = angle;
      this.draw();
    },
    mobilePosition (e) {
      const { pageX, pageY } = e.changedTouches[0];
      const { x, y } = this.$el.getBoundingClientRect();
      return [pageX - (window.scrollX + x), pageY - (window.scrollY + y)]
    },
  },
  mounted () {
    this.ctx = this.$el.getContext('2d');
    this.$el.addEventListener('mousemove', (e) => this.move(this.calculateRenderParams(e.offsetX, e.offsetY)), false);
    this.$el.addEventListener('mouseout', () => this.draw(), false);
    this.$el.addEventListener('click', (e) => this.press(this.calculateRenderParams(e.offsetX, e.offsetY)), false);
    this.$el.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.move(this.calculateRenderParams(...this.mobilePosition(e)));
    }, false);
    this.$el.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.press(this.calculateRenderParams(...this.mobilePosition(e)))
    })

    this.$watch(
      'currentValue',
      (val) => {
        this.$emit('input', val);
        const randerScale = 240;
        const angle = randerScale / this.range * (val - this.min) - 30;

        this.initialAngle = angle;
        this.draw();
      },
      { immediate: true }
    );
  }
};
</script>
