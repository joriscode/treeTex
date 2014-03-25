ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__V = (function($$this, that$3) {
  $$this.initFrom__Lscala_collection_immutable_VectorPointer__I__V(that$3, that$3.depth__I())
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__initFrom__Lscala_collection_immutable_VectorPointer__Lscala_collection_immutable_VectorPointer__I__V = (function($$this, that, depth) {
  $$this.depth$und$eq__I__V(depth);
  var x1 = (depth - 1);
  switch (x1) {
    case -1:
      break;
    case 0:
      {
        $$this.display0$und$eq__AO__V(that.display0__AO());
        break
      };
    case 1:
      {
        $$this.display1$und$eq__AO__V(that.display1__AO());
        $$this.display0$und$eq__AO__V(that.display0__AO());
        break
      };
    case 2:
      {
        $$this.display2$und$eq__AO__V(that.display2__AO());
        $$this.display1$und$eq__AO__V(that.display1__AO());
        $$this.display0$und$eq__AO__V(that.display0__AO());
        break
      };
    case 3:
      {
        $$this.display3$und$eq__AO__V(that.display3__AO());
        $$this.display2$und$eq__AO__V(that.display2__AO());
        $$this.display1$und$eq__AO__V(that.display1__AO());
        $$this.display0$und$eq__AO__V(that.display0__AO());
        break
      };
    case 4:
      {
        $$this.display4$und$eq__AO__V(that.display4__AO());
        $$this.display3$und$eq__AO__V(that.display3__AO());
        $$this.display2$und$eq__AO__V(that.display2__AO());
        $$this.display1$und$eq__AO__V(that.display1__AO());
        $$this.display0$und$eq__AO__V(that.display0__AO());
        break
      };
    case 5:
      {
        $$this.display5$und$eq__AO__V(that.display5__AO());
        $$this.display4$und$eq__AO__V(that.display4__AO());
        $$this.display3$und$eq__AO__V(that.display3__AO());
        $$this.display2$und$eq__AO__V(that.display2__AO());
        $$this.display1$und$eq__AO__V(that.display1__AO());
        $$this.display0$und$eq__AO__V(that.display0__AO());
        break
      };
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bI(x1));
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__getElem__Lscala_collection_immutable_VectorPointer__I__I__O = (function($$this, index, xor) {
  if ((xor < 32)) {
    return $$this.display0__AO().underlying[(index & 31)]
  } else {
    if ((xor < 1024)) {
      return ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[((index >> 5) & 31)], 1).underlying[(index & 31)]
    } else {
      if ((xor < 32768)) {
        return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((index >> 10) & 31)], 1).underlying[((index >> 5) & 31)], 1).underlying[(index & 31)]
      } else {
        if ((xor < 1048576)) {
          return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((index >> 15) & 31)], 1).underlying[((index >> 10) & 31)], 1).underlying[((index >> 5) & 31)], 1).underlying[(index & 31)]
        } else {
          if ((xor < 33554432)) {
            return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object($$this.display4__AO().underlying[((index >> 20) & 31)], 1).underlying[((index >> 15) & 31)], 1).underlying[((index >> 10) & 31)], 1).underlying[((index >> 5) & 31)], 1).underlying[(index & 31)]
          } else {
            if ((xor < 1073741824)) {
              return ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.asArrayOf.java_lang_Object($$this.display5__AO().underlying[((index >> 25) & 31)], 1).underlying[((index >> 20) & 31)], 1).underlying[((index >> 15) & 31)], 1).underlying[((index >> 10) & 31)], 1).underlying[((index >> 5) & 31)], 1).underlying[(index & 31)]
            } else {
              throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
            }
          }
        }
      }
    }
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPos__Lscala_collection_immutable_VectorPointer__I__I__V = (function($$this, index, xor) {
  if ((xor < 32)) {
    /*<skip>*/
  } else {
    if ((xor < 1024)) {
      $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[((index >> 5) & 31)], 1))
    } else {
      if ((xor < 32768)) {
        $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((index >> 10) & 31)], 1));
        $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[((index >> 5) & 31)], 1))
      } else {
        if ((xor < 1048576)) {
          $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((index >> 15) & 31)], 1));
          $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((index >> 10) & 31)], 1));
          $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[((index >> 5) & 31)], 1))
        } else {
          if ((xor < 33554432)) {
            $$this.display3$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display4__AO().underlying[((index >> 20) & 31)], 1));
            $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((index >> 15) & 31)], 1));
            $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((index >> 10) & 31)], 1));
            $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[((index >> 5) & 31)], 1))
          } else {
            if ((xor < 1073741824)) {
              $$this.display4$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display5__AO().underlying[((index >> 25) & 31)], 1));
              $$this.display3$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display4__AO().underlying[((index >> 20) & 31)], 1));
              $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((index >> 15) & 31)], 1));
              $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((index >> 10) & 31)], 1));
              $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[((index >> 5) & 31)], 1))
            } else {
              throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
            }
          }
        }
      }
    }
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStart__Lscala_collection_immutable_VectorPointer__I__I__V = (function($$this, index, xor) {
  if ((xor < 1024)) {
    $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[((index >> 5) & 31)], 1))
  } else {
    if ((xor < 32768)) {
      $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((index >> 10) & 31)], 1));
      $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[0], 1))
    } else {
      if ((xor < 1048576)) {
        $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((index >> 15) & 31)], 1));
        $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[0], 1));
        $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[0], 1))
      } else {
        if ((xor < 33554432)) {
          $$this.display3$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display4__AO().underlying[((index >> 20) & 31)], 1));
          $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[0], 1));
          $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[0], 1));
          $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[0], 1))
        } else {
          if ((xor < 1073741824)) {
            $$this.display4$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display5__AO().underlying[((index >> 25) & 31)], 1));
            $$this.display3$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display4__AO().underlying[0], 1));
            $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[0], 1));
            $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[0], 1));
            $$this.display0$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display1__AO().underlying[0], 1))
          } else {
            throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
          }
        }
      }
    }
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoNextBlockStartWritable__Lscala_collection_immutable_VectorPointer__I__I__V = (function($$this, index, xor) {
  if ((xor < 1024)) {
    if (($$this.depth__I() === 1)) {
      $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
      $$this.display1__AO().underlying[0] = $$this.display0__AO();
      $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
    };
    $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
    $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO()
  } else {
    if ((xor < 32768)) {
      if (($$this.depth__I() === 2)) {
        $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
        $$this.display2__AO().underlying[0] = $$this.display1__AO();
        $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
      };
      $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
      $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
      $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
      $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO()
    } else {
      if ((xor < 1048576)) {
        if (($$this.depth__I() === 3)) {
          $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
          $$this.display3__AO().underlying[0] = $$this.display2__AO();
          $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
        };
        $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
        $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
        $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
        $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
        $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO();
        $$this.display3__AO().underlying[((index >> 15) & 31)] = $$this.display2__AO()
      } else {
        if ((xor < 33554432)) {
          if (($$this.depth__I() === 4)) {
            $$this.display4$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display4__AO().underlying[0] = $$this.display3__AO();
            $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
          };
          $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
          $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
          $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
          $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
          $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
          $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO();
          $$this.display3__AO().underlying[((index >> 15) & 31)] = $$this.display2__AO();
          $$this.display4__AO().underlying[((index >> 20) & 31)] = $$this.display3__AO()
        } else {
          if ((xor < 1073741824)) {
            if (($$this.depth__I() === 5)) {
              $$this.display5$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
              $$this.display5__AO().underlying[0] = $$this.display4__AO();
              $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
            };
            $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display4$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
            $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO();
            $$this.display3__AO().underlying[((index >> 15) & 31)] = $$this.display2__AO();
            $$this.display4__AO().underlying[((index >> 20) & 31)] = $$this.display3__AO();
            $$this.display5__AO().underlying[((index >> 25) & 31)] = $$this.display4__AO()
          } else {
            throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
          }
        }
      }
    }
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyOf__Lscala_collection_immutable_VectorPointer__AO__AO = (function($$this, a) {
  if ((a === null)) {
    ScalaJS.modules.scala_Predef().println__O__V("NULL")
  };
  var b = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [a.underlying.length]);
  ScalaJS.modules.scala_compat_Platform().arraycopy__O__I__O__I__I__V(a, 0, b, 0, a.underlying.length);
  return b
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__nullSlotAndCopy__Lscala_collection_immutable_VectorPointer__AO__I__AO = (function($$this, array, index) {
  var x = array.underlying[index];
  array.underlying[index] = null;
  return $$this.copyOf__AO__AO(ScalaJS.asArrayOf.java_lang_Object(x, 1))
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__stabilize__Lscala_collection_immutable_VectorPointer__I__V = (function($$this, index) {
  var x1 = ($$this.depth__I() - 1);
  switch (x1) {
    case 5:
      {
        $$this.display5$und$eq__AO__V($$this.copyOf__AO__AO($$this.display5__AO()));
        $$this.display4$und$eq__AO__V($$this.copyOf__AO__AO($$this.display4__AO()));
        $$this.display3$und$eq__AO__V($$this.copyOf__AO__AO($$this.display3__AO()));
        $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
        $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
        $$this.display5__AO().underlying[((index >> 25) & 31)] = $$this.display4__AO();
        $$this.display4__AO().underlying[((index >> 20) & 31)] = $$this.display3__AO();
        $$this.display3__AO().underlying[((index >> 15) & 31)] = $$this.display2__AO();
        $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO();
        $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
        break
      };
    case 4:
      {
        $$this.display4$und$eq__AO__V($$this.copyOf__AO__AO($$this.display4__AO()));
        $$this.display3$und$eq__AO__V($$this.copyOf__AO__AO($$this.display3__AO()));
        $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
        $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
        $$this.display4__AO().underlying[((index >> 20) & 31)] = $$this.display3__AO();
        $$this.display3__AO().underlying[((index >> 15) & 31)] = $$this.display2__AO();
        $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO();
        $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
        break
      };
    case 3:
      {
        $$this.display3$und$eq__AO__V($$this.copyOf__AO__AO($$this.display3__AO()));
        $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
        $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
        $$this.display3__AO().underlying[((index >> 15) & 31)] = $$this.display2__AO();
        $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO();
        $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
        break
      };
    case 2:
      {
        $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
        $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
        $$this.display2__AO().underlying[((index >> 10) & 31)] = $$this.display1__AO();
        $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
        break
      };
    case 1:
      {
        $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
        $$this.display1__AO().underlying[((index >> 5) & 31)] = $$this.display0__AO();
        break
      };
    case 0:
      break;
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bI(x1));
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__V = (function($$this, newIndex, xor) {
  var x1 = ($$this.depth__I() - 1);
  switch (x1) {
    case 5:
      {
        $$this.display5$und$eq__AO__V($$this.copyOf__AO__AO($$this.display5__AO()));
        $$this.display4$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display5__AO(), ((newIndex >> 25) & 31)));
        $$this.display3$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display4__AO(), ((newIndex >> 20) & 31)));
        $$this.display2$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display3__AO(), ((newIndex >> 15) & 31)));
        $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
        $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)));
        break
      };
    case 4:
      {
        $$this.display4$und$eq__AO__V($$this.copyOf__AO__AO($$this.display4__AO()));
        $$this.display3$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display4__AO(), ((newIndex >> 20) & 31)));
        $$this.display2$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display3__AO(), ((newIndex >> 15) & 31)));
        $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
        $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)));
        break
      };
    case 3:
      {
        $$this.display3$und$eq__AO__V($$this.copyOf__AO__AO($$this.display3__AO()));
        $$this.display2$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display3__AO(), ((newIndex >> 15) & 31)));
        $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
        $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)));
        break
      };
    case 2:
      {
        $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
        $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
        $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)));
        break
      };
    case 1:
      {
        $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
        $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)));
        break
      };
    case 0:
      {
        $$this.display0$und$eq__AO__V($$this.copyOf__AO__AO($$this.display0__AO()));
        break
      };
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bI(x1));
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V = (function($$this, oldIndex, newIndex, xor) {
  if ((xor < 32)) {
    $$this.display0$und$eq__AO__V($$this.copyOf__AO__AO($$this.display0__AO()))
  } else {
    if ((xor < 1024)) {
      $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
      $$this.display1__AO().underlying[((oldIndex >> 5) & 31)] = $$this.display0__AO();
      $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)))
    } else {
      if ((xor < 32768)) {
        $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
        $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
        $$this.display1__AO().underlying[((oldIndex >> 5) & 31)] = $$this.display0__AO();
        $$this.display2__AO().underlying[((oldIndex >> 10) & 31)] = $$this.display1__AO();
        $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
        $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)))
      } else {
        if ((xor < 1048576)) {
          $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
          $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
          $$this.display3$und$eq__AO__V($$this.copyOf__AO__AO($$this.display3__AO()));
          $$this.display1__AO().underlying[((oldIndex >> 5) & 31)] = $$this.display0__AO();
          $$this.display2__AO().underlying[((oldIndex >> 10) & 31)] = $$this.display1__AO();
          $$this.display3__AO().underlying[((oldIndex >> 15) & 31)] = $$this.display2__AO();
          $$this.display2$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display3__AO(), ((newIndex >> 15) & 31)));
          $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
          $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)))
        } else {
          if ((xor < 33554432)) {
            $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
            $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
            $$this.display3$und$eq__AO__V($$this.copyOf__AO__AO($$this.display3__AO()));
            $$this.display4$und$eq__AO__V($$this.copyOf__AO__AO($$this.display4__AO()));
            $$this.display1__AO().underlying[((oldIndex >> 5) & 31)] = $$this.display0__AO();
            $$this.display2__AO().underlying[((oldIndex >> 10) & 31)] = $$this.display1__AO();
            $$this.display3__AO().underlying[((oldIndex >> 15) & 31)] = $$this.display2__AO();
            $$this.display4__AO().underlying[((oldIndex >> 20) & 31)] = $$this.display3__AO();
            $$this.display3$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display4__AO(), ((newIndex >> 20) & 31)));
            $$this.display2$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display3__AO(), ((newIndex >> 15) & 31)));
            $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
            $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)))
          } else {
            if ((xor < 1073741824)) {
              $$this.display1$und$eq__AO__V($$this.copyOf__AO__AO($$this.display1__AO()));
              $$this.display2$und$eq__AO__V($$this.copyOf__AO__AO($$this.display2__AO()));
              $$this.display3$und$eq__AO__V($$this.copyOf__AO__AO($$this.display3__AO()));
              $$this.display4$und$eq__AO__V($$this.copyOf__AO__AO($$this.display4__AO()));
              $$this.display5$und$eq__AO__V($$this.copyOf__AO__AO($$this.display5__AO()));
              $$this.display1__AO().underlying[((oldIndex >> 5) & 31)] = $$this.display0__AO();
              $$this.display2__AO().underlying[((oldIndex >> 10) & 31)] = $$this.display1__AO();
              $$this.display3__AO().underlying[((oldIndex >> 15) & 31)] = $$this.display2__AO();
              $$this.display4__AO().underlying[((oldIndex >> 20) & 31)] = $$this.display3__AO();
              $$this.display5__AO().underlying[((oldIndex >> 25) & 31)] = $$this.display4__AO();
              $$this.display4$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display5__AO(), ((newIndex >> 25) & 31)));
              $$this.display3$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display4__AO(), ((newIndex >> 20) & 31)));
              $$this.display2$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display3__AO(), ((newIndex >> 15) & 31)));
              $$this.display1$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display2__AO(), ((newIndex >> 10) & 31)));
              $$this.display0$und$eq__AO__V($$this.nullSlotAndCopy__AO__I__AO($$this.display1__AO(), ((newIndex >> 5) & 31)))
            } else {
              throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
            }
          }
        }
      }
    }
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__copyRange__Lscala_collection_immutable_VectorPointer__AO__I__I__AO = (function($$this, array, oldLeft, newLeft) {
  var elems = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]);
  ScalaJS.modules.scala_compat_Platform().arraycopy__O__I__O__I__I__V(array, oldLeft, elems, newLeft, (32 - ScalaJS.modules.scala_math_package().max__I__I__I(newLeft, oldLeft)));
  return elems
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable0__Lscala_collection_immutable_VectorPointer__I__I__I__V = (function($$this, oldIndex, newIndex, xor) {
  if ((xor < 32)) {
    /*<skip>*/
  } else {
    if ((xor < 1024)) {
      if (($$this.depth__I() === 1)) {
        $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
        $$this.display1__AO().underlying[((oldIndex >> 5) & 31)] = $$this.display0__AO();
        $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
      };
      $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
    } else {
      if ((xor < 32768)) {
        if (($$this.depth__I() === 2)) {
          $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
          $$this.display2__AO().underlying[((oldIndex >> 10) & 31)] = $$this.display1__AO();
          $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
        };
        $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((newIndex >> 10) & 31)], 1));
        if (($$this.display1__AO() === null)) {
          $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
        };
        $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
      } else {
        if ((xor < 1048576)) {
          if (($$this.depth__I() === 3)) {
            $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display3__AO().underlying[((oldIndex >> 15) & 31)] = $$this.display2__AO();
            $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
            $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
          };
          $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((newIndex >> 15) & 31)], 1));
          if (($$this.display2__AO() === null)) {
            $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
          };
          $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((newIndex >> 10) & 31)], 1));
          if (($$this.display1__AO() === null)) {
            $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
          };
          $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
        } else {
          if ((xor < 33554432)) {
            if (($$this.depth__I() === 4)) {
              $$this.display4$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
              $$this.display4__AO().underlying[((oldIndex >> 20) & 31)] = $$this.display3__AO();
              $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
              $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
              $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
              $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
            };
            $$this.display3$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display4__AO().underlying[((newIndex >> 20) & 31)], 1));
            if (($$this.display3__AO() === null)) {
              $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
            };
            $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((newIndex >> 15) & 31)], 1));
            if (($$this.display2__AO() === null)) {
              $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
            };
            $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((newIndex >> 10) & 31)], 1));
            if (($$this.display1__AO() === null)) {
              $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
            };
            $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
          } else {
            if ((xor < 1073741824)) {
              if (($$this.depth__I() === 5)) {
                $$this.display5$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
                $$this.display5__AO().underlying[((oldIndex >> 25) & 31)] = $$this.display4__AO();
                $$this.display4$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
                $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
                $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
                $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]));
                $$this.depth$und$eq__I__V(($$this.depth__I() + 1))
              };
              $$this.display4$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display5__AO().underlying[((newIndex >> 20) & 31)], 1));
              if (($$this.display4__AO() === null)) {
                $$this.display4$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
              };
              $$this.display3$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display4__AO().underlying[((newIndex >> 20) & 31)], 1));
              if (($$this.display3__AO() === null)) {
                $$this.display3$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
              };
              $$this.display2$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display3__AO().underlying[((newIndex >> 15) & 31)], 1));
              if (($$this.display2__AO() === null)) {
                $$this.display2$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
              };
              $$this.display1$und$eq__AO__V(ScalaJS.asArrayOf.java_lang_Object($$this.display2__AO().underlying[((newIndex >> 10) & 31)], 1));
              if (($$this.display1__AO() === null)) {
                $$this.display1$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
              };
              $$this.display0$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [32]))
            } else {
              throw new ScalaJS.c.java_lang_IllegalArgumentException().init___()
            }
          }
        }
      }
    }
  }
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__gotoFreshPosWritable1__Lscala_collection_immutable_VectorPointer__I__I__I__V = (function($$this, oldIndex, newIndex, xor) {
  $$this.stabilize__I__V(oldIndex);
  $$this.gotoFreshPosWritable0__I__I__I__V(oldIndex, newIndex, xor)
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__debug__Lscala_collection_immutable_VectorPointer__V = (function($$this) {
  return undefined
});
ScalaJS.impls.scala_collection_immutable_VectorPointer$class__$init$__Lscala_collection_immutable_VectorPointer__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=VectorPointer$class.js.map
