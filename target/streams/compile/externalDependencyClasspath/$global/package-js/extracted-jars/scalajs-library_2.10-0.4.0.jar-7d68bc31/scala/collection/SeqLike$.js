/** @constructor */
ScalaJS.c.scala_collection_SeqLike$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_SeqLike$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_SeqLike$.prototype.constructor = ScalaJS.c.scala_collection_SeqLike$;
ScalaJS.c.scala_collection_SeqLike$.prototype.kmpOptimizeWord__p1__Lscala_collection_Seq__I__I__Z__Lscala_collection_IndexedSeq = (function(W, n0, n1, forward) {
  var x1 = W;
  if (ScalaJS.is.scala_collection_IndexedSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_IndexedSeq(x1);
    if (((forward && (n0 === 0)) && (n1 === W.length__I()))) {
      return x2
    } else {
      if (forward) {
        return new ScalaJS.c.scala_collection_SeqLike$$anon$3().init___I__I__Lscala_collection_IndexedSeq(n0, n1, x2)
      } else {
        return new ScalaJS.c.scala_collection_SeqLike$$anon$4().init___I__I__Lscala_collection_IndexedSeq(n0, n1, x2)
      }
    }
  };
  return new ScalaJS.c.scala_collection_SeqLike$$anon$5().init___Lscala_collection_Seq__I__I__Z(W, n0, n1, forward)
});
ScalaJS.c.scala_collection_SeqLike$.prototype.kmpJumpTable__p1__Lscala_collection_IndexedSeq__I__AI = (function(Wopt, wlen) {
  var arr = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [wlen]);
  var pos = 2;
  var cnd = 0;
  arr.underlying[0] = -1;
  arr.underlying[1] = 0;
  while ((pos < wlen)) {
    if (ScalaJS.anyEqEq(Wopt.apply__I__O((pos - 1)), Wopt.apply__I__O(cnd))) {
      arr.underlying[pos] = (cnd + 1);
      pos = (pos + 1);
      cnd = (cnd + 1)
    } else {
      if ((cnd > 0)) {
        cnd = arr.underlying[cnd]
      } else {
        arr.underlying[pos] = 0;
        pos = (pos + 1)
      }
    }
  };
  return arr
});
ScalaJS.c.scala_collection_SeqLike$.prototype.scala$collection$SeqLike$$kmpSearch__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__Z__I = (function(S, m0, m1, W, n0, n1, forward) {
  if ((n1 === (n0 + 1))) {
    if (forward) {
      return this.clipR$1__p1__I__I__I(S.indexOf__O__I__I(W.apply__I__O(n0), m0), m1)
    } else {
      return this.clipL$1__p1__I__I__I(S.lastIndexOf__O__I__I(W.apply__I__O(n0), (m1 - 1)), (m0 - 1))
    }
  } else {
    if (((m1 - m0) === (n1 - n0))) {
      if (ScalaJS.anyRefEqEq(S.view__Lscala_collection_SeqView().slice__I__I__Lscala_collection_TraversableView(m0, m1), W.view__Lscala_collection_SeqView().slice__I__I__Lscala_collection_TraversableView(n0, n1))) {
        return m0
      } else {
        return -1
      }
    } else {
      var x1 = S;
      if (ScalaJS.is.scala_collection_IndexedSeq(x1)) {
        var Wopt = this.kmpOptimizeWord__p1__Lscala_collection_Seq__I__I__Z__Lscala_collection_IndexedSeq(W, n0, n1, forward);
        var T = this.kmpJumpTable__p1__Lscala_collection_IndexedSeq__I__AI(Wopt, (n1 - n0));
        var i = 0;
        var m = 0;
        if (forward) {
          var zero = m0
        } else {
          var zero = (m1 - 1)
        };
        if (forward) {
          var delta = 1
        } else {
          var delta = -1
        };
        while (((i + m) < (m1 - m0))) {
          if (ScalaJS.anyEqEq(Wopt.apply__I__O(i), S.apply__I__O((zero + (delta * (i + m)))))) {
            i = (i + 1);
            if ((i === (n1 - n0))) {
              if (forward) {
                return (m + m0)
              } else {
                return ((m1 - m) - i)
              }
            }
          } else {
            var ti = T.underlying[i];
            m = (m + (i - ti));
            if ((i > 0)) {
              i = ti
            }
          }
        };
        return -1
      };
      var iter = S.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(m0);
      var Wopt$2 = this.kmpOptimizeWord__p1__Lscala_collection_Seq__I__I__Z__Lscala_collection_IndexedSeq(W, n0, n1, true);
      var T$2 = this.kmpJumpTable__p1__Lscala_collection_IndexedSeq__I__AI(Wopt$2, (n1 - n0));
      var cache = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [(n1 - n0)]);
      var largest = 0;
      var i$2 = 0;
      var m$2 = 0;
      var answer = -1;
      while (((((m$2 + m0) + n1) - n0) <= m1)) {
        while (((i$2 + m$2) >= largest)) {
          cache.underlying[(largest % (n1 - n0))] = iter.next__O();
          largest = (largest + 1)
        };
        if (ScalaJS.anyEqEq(Wopt$2.apply__I__O(i$2), cache.underlying[((i$2 + m$2) % (n1 - n0))])) {
          i$2 = (i$2 + 1);
          if ((i$2 === (n1 - n0))) {
            if (forward) {
              return (m$2 + m0)
            } else {
              i$2 = (i$2 - 1);
              answer = (m$2 + m0);
              var ti$2 = T$2.underlying[i$2];
              m$2 = (m$2 + (i$2 - ti$2));
              if ((i$2 > 0)) {
                i$2 = ti$2
              }
            }
          }
        } else {
          var ti$3 = T$2.underlying[i$2];
          m$2 = (m$2 + (i$2 - ti$3));
          if ((i$2 > 0)) {
            i$2 = ti$3
          }
        }
      };
      return answer
    }
  }
});
ScalaJS.c.scala_collection_SeqLike$.prototype.indexOf__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__I__I = (function(source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
  var slen = source.length__I();
  var clippedFrom = ScalaJS.modules.scala_math_package().max__I__I__I(0, fromIndex);
  var s0 = ScalaJS.modules.scala_math_package().min__I__I__I(slen, (sourceOffset + clippedFrom));
  var s1 = ScalaJS.modules.scala_math_package().min__I__I__I(slen, (s0 + sourceCount));
  var tlen = target.length__I();
  var t0 = ScalaJS.modules.scala_math_package().min__I__I__I(tlen, targetOffset);
  var t1 = ScalaJS.modules.scala_math_package().min__I__I__I(tlen, (t0 + targetCount));
  if ((clippedFrom > (slen - sourceOffset))) {
    return -1
  } else {
    if (((t1 - t0) < 1)) {
      return s0
    } else {
      if (((s1 - s0) < (t1 - t0))) {
        return -1
      } else {
        var ans = this.scala$collection$SeqLike$$kmpSearch__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__Z__I(source, s0, s1, target, t0, t1, true);
        if ((ans < 0)) {
          return ans
        } else {
          return (ans - ScalaJS.modules.scala_math_package().min__I__I__I(slen, sourceOffset))
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_SeqLike$.prototype.lastIndexOf__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__I__I = (function(source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
  var slen = source.length__I();
  var tlen = target.length__I();
  var s0 = ScalaJS.modules.scala_math_package().min__I__I__I(slen, sourceOffset);
  var s1 = ScalaJS.modules.scala_math_package().min__I__I__I(slen, (s0 + sourceCount));
  var clippedFrom = ScalaJS.modules.scala_math_package().min__I__I__I((s1 - s0), fromIndex);
  var t0 = ScalaJS.modules.scala_math_package().min__I__I__I(tlen, targetOffset);
  var t1 = ScalaJS.modules.scala_math_package().min__I__I__I(tlen, (t0 + targetCount));
  var fixed_s1 = ScalaJS.modules.scala_math_package().min__I__I__I(s1, (((s0 + clippedFrom) + (t1 - t0)) - 1));
  if ((clippedFrom < 0)) {
    return -1
  } else {
    if (((t1 - t0) < 1)) {
      return (s0 + clippedFrom)
    } else {
      if (((fixed_s1 - s0) < (t1 - t0))) {
        return -1
      } else {
        var ans = this.scala$collection$SeqLike$$kmpSearch__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__Z__I(source, s0, fixed_s1, target, t0, t1, false);
        if ((ans < 0)) {
          return ans
        } else {
          return (ans - s0)
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_SeqLike$.prototype.clipR$1__p1__I__I__I = (function(x, y) {
  if ((x < y)) {
    return x
  } else {
    return -1
  }
});
ScalaJS.c.scala_collection_SeqLike$.prototype.clipL$1__p1__I__I__I = (function(x, y) {
  if ((x > y)) {
    return x
  } else {
    return -1
  }
});
ScalaJS.c.scala_collection_SeqLike$.prototype.lastIndexOf__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__I__ = (function(source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
  return ScalaJS.bI(this.lastIndexOf__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__I__I(source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex))
});
ScalaJS.c.scala_collection_SeqLike$.prototype.indexOf__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__I__ = (function(source$2, sourceOffset$2, sourceCount$2, target$2, targetOffset$2, targetCount$2, fromIndex$2) {
  return ScalaJS.bI(this.indexOf__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__I__I(source$2, sourceOffset$2, sourceCount$2, target$2, targetOffset$2, targetCount$2, fromIndex$2))
});
ScalaJS.c.scala_collection_SeqLike$.prototype.scala$collection$SeqLike$$kmpSearch__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__Z__ = (function(S, m0, m1, W, n0, n1, forward) {
  return ScalaJS.bI(this.scala$collection$SeqLike$$kmpSearch__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__Z__I(S, m0, m1, W, n0, n1, forward))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqLike$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqLike$.prototype = ScalaJS.c.scala_collection_SeqLike$.prototype;
ScalaJS.is.scala_collection_SeqLike$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqLike$)))
});
ScalaJS.as.scala_collection_SeqLike$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqLike$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqLike")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqLike$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqLike$)))
});
ScalaJS.asArrayOf.scala_collection_SeqLike$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqLike$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqLike;", depth)
  }
});
ScalaJS.data.scala_collection_SeqLike$ = new ScalaJS.ClassTypeData({
  scala_collection_SeqLike$: 0
}, false, "scala.collection.SeqLike$", ScalaJS.data.java_lang_Object, {
  scala_collection_SeqLike$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SeqLike$.prototype.$classData = ScalaJS.data.scala_collection_SeqLike$;
ScalaJS.moduleInstances.scala_collection_SeqLike = undefined;
ScalaJS.modules.scala_collection_SeqLike = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_SeqLike)) {
    ScalaJS.moduleInstances.scala_collection_SeqLike = new ScalaJS.c.scala_collection_SeqLike$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_SeqLike
});
//@ sourceMappingURL=SeqLike$.js.map
