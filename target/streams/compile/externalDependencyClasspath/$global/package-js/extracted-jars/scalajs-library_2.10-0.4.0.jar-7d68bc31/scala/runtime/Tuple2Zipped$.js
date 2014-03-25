/** @constructor */
ScalaJS.c.scala_runtime_Tuple2Zipped$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.constructor = ScalaJS.c.scala_runtime_Tuple2Zipped$;
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.map$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f$7, cbf$3) {
  var nonLocalReturnKey1 = new ScalaJS.c.java_lang_Object().init___();
  try {
    var b = cbf$3.apply__O__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).repr__O());
    b.sizeHint__Lscala_collection_TraversableLike__V(ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()));
    var elems2 = ScalaJS.as.scala_collection_IterableLike($$this.$$und2__O()).iterator__Lscala_collection_Iterator();
    ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1, elems2$1, f$1, nonLocalReturnKey1$1) {
      return (function(el1) {
        if (elems2$1.hasNext__Z()) {
          return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(f$1.apply__O__O__O(el1, elems2$1.next__O()))
        } else {
          throw new ScalaJS.c.scala_runtime_NonLocalReturnControl().init___O__O(nonLocalReturnKey1$1, b$1.result__O())
        }
      })
    })(b, elems2, f$7, nonLocalReturnKey1)));
    return b.result__O()
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey1)) {
        return ex.value__O()
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.flatMap$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, cbf) {
  var nonLocalReturnKey2 = new ScalaJS.c.java_lang_Object().init___();
  try {
    var b = cbf.apply__O__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).repr__O());
    var elems2 = ScalaJS.as.scala_collection_IterableLike($$this.$$und2__O()).iterator__Lscala_collection_Iterator();
    ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$2, elems2$2, f$2, nonLocalReturnKey2$1) {
      return (function(el1) {
        if (elems2$2.hasNext__Z()) {
          return ScalaJS.as.scala_collection_mutable_Builder(b$2.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_TraversableOnce(f$2.apply__O__O__O(el1, elems2$2.next__O()))))
        } else {
          throw new ScalaJS.c.scala_runtime_NonLocalReturnControl().init___O__O(nonLocalReturnKey2$1, b$2.result__O())
        }
      })
    })(b, elems2, f, nonLocalReturnKey2)));
    return b.result__O()
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey2)) {
        return ex.value__O()
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.filter$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple2 = (function($$this, f, cbf1, cbf2) {
  var nonLocalReturnKey3 = new ScalaJS.c.java_lang_Object().init___();
  try {
    var b1 = cbf1.apply__O__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).repr__O());
    var b2 = cbf2.apply__O__Lscala_collection_mutable_Builder(ScalaJS.as.scala_collection_TraversableLike($$this.$$und2__O()).repr__O());
    var elems2 = ScalaJS.as.scala_collection_IterableLike($$this.$$und2__O()).iterator__Lscala_collection_Iterator();
    ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b1$1, b2$1, elems2$3, f$3, nonLocalReturnKey3$1) {
      return (function(el1) {
        if (elems2$3.hasNext__Z()) {
          var el2 = elems2$3.next__O();
          if (ScalaJS.uZ(f$3.apply__O__O__O(el1, el2))) {
            b1$1.$$plus$eq__O__Lscala_collection_mutable_Builder(el1);
            return b2$1.$$plus$eq__O__Lscala_collection_mutable_Builder(el2)
          } else {
            return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
          }
        } else {
          throw new ScalaJS.c.scala_runtime_NonLocalReturnControl().init___O__O(nonLocalReturnKey3$1, new ScalaJS.c.scala_Tuple2().init___O__O(b1$1.result__O(), b2$1.result__O()))
        }
      })
    })(b1, b2, elems2, f, nonLocalReturnKey3)));
    return new ScalaJS.c.scala_Tuple2().init___O__O(b1.result__O(), b2.result__O())
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey3)) {
        return ScalaJS.as.scala_Tuple2(ex.value__O())
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.exists$extension__Lscala_Tuple2__Lscala_Function2__Z = (function($$this, f) {
  var nonLocalReturnKey4 = new ScalaJS.c.java_lang_Object().init___();
  try {
    var elems2 = ScalaJS.as.scala_collection_IterableLike($$this.$$und2__O()).iterator__Lscala_collection_Iterator();
    ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elems2$4, f$4, nonLocalReturnKey4$1) {
      return (function(el1) {
        if (elems2$4.hasNext__Z()) {
          if (ScalaJS.uZ(f$4.apply__O__O__O(el1, elems2$4.next__O()))) {
            throw new ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp().init___O__Z(nonLocalReturnKey4$1, true)
          }
        } else {
          throw new ScalaJS.c.scala_runtime_NonLocalReturnControl$mcZ$sp().init___O__Z(nonLocalReturnKey4$1, false)
        };
        return ScalaJS.bV(undefined)
      })
    })(elems2, f, nonLocalReturnKey4)));
    return false
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey4)) {
        return ex.value$mcZ$sp__Z()
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.forall$extension__Lscala_Tuple2__Lscala_Function2__Z = (function($$this, f) {
  return (!this.exists$extension__Lscala_Tuple2__Lscala_Function2__Z($$this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$5) {
    return (function(x, y) {
      return ScalaJS.bZ((!ScalaJS.uZ(f$5.apply__O__O__O(x, y))))
    })
  })(f))))
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.foreach$extension__Lscala_Tuple2__Lscala_Function2__V = (function($$this, f) {
  var nonLocalReturnKey5 = new ScalaJS.c.java_lang_Object().init___();
  try {
    var elems2 = ScalaJS.as.scala_collection_IterableLike($$this.$$und2__O()).iterator__Lscala_collection_Iterator();
    ScalaJS.as.scala_collection_TraversableLike($$this.$$und1__O()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elems2$5, f$6, nonLocalReturnKey5$1) {
      return (function(el1) {
        if (elems2$5.hasNext__Z()) {
          return f$6.apply__O__O__O(el1, elems2$5.next__O())
        } else {
          throw new ScalaJS.c.scala_runtime_NonLocalReturnControl$mcV$sp().init___O__Lscala_runtime_BoxedUnit(nonLocalReturnKey5$1, ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit())
        }
      })
    })(elems2, f, nonLocalReturnKey5)))
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey5)) {
        ex.value$mcV$sp__V()
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.hashCode$extension__Lscala_Tuple2__I = (function($$this) {
  return $$this.hashCode__I()
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.equals$extension__Lscala_Tuple2__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_Tuple2Zipped(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var Tuple2Zipped$1 = null
    } else {
      var Tuple2Zipped$1 = ScalaJS.as.scala_runtime_Tuple2Zipped(x$1).colls__Lscala_Tuple2()
    };
    return ScalaJS.anyRefEqEq($$this, Tuple2Zipped$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.equals$extension__Lscala_Tuple2__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__Lscala_Tuple2__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.hashCode$extension__Lscala_Tuple2__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__Lscala_Tuple2__I($$this$2))
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.foreach$extension__Lscala_Tuple2__Lscala_Function2__ = (function($$this$3, f) {
  return ScalaJS.bV(this.foreach$extension__Lscala_Tuple2__Lscala_Function2__V($$this$3, f))
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.forall$extension__Lscala_Tuple2__Lscala_Function2__ = (function($$this$4, f$2) {
  return ScalaJS.bZ(this.forall$extension__Lscala_Tuple2__Lscala_Function2__Z($$this$4, f$2))
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.exists$extension__Lscala_Tuple2__Lscala_Function2__ = (function($$this$5, f$3) {
  return ScalaJS.bZ(this.exists$extension__Lscala_Tuple2__Lscala_Function2__Z($$this$5, f$3))
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.filter$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__ = (function($$this$6, f$4, cbf1, cbf2) {
  return this.filter$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom__Lscala_Tuple2($$this$6, f$4, cbf1, cbf2)
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.flatMap$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function($$this$7, f$5, cbf) {
  return this.flatMap$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O($$this$7, f$5, cbf)
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.map$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function($$this$8, f$6, cbf$2) {
  return this.map$extension__Lscala_Tuple2__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O($$this$8, f$6, cbf$2)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_Tuple2Zipped$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_Tuple2Zipped$.prototype = ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype;
ScalaJS.is.scala_runtime_Tuple2Zipped$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Tuple2Zipped$)))
});
ScalaJS.as.scala_runtime_Tuple2Zipped$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Tuple2Zipped$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Tuple2Zipped")
  }
});
ScalaJS.isArrayOf.scala_runtime_Tuple2Zipped$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Tuple2Zipped$)))
});
ScalaJS.asArrayOf.scala_runtime_Tuple2Zipped$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Tuple2Zipped$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Tuple2Zipped;", depth)
  }
});
ScalaJS.data.scala_runtime_Tuple2Zipped$ = new ScalaJS.ClassTypeData({
  scala_runtime_Tuple2Zipped$: 0
}, false, "scala.runtime.Tuple2Zipped$", ScalaJS.data.java_lang_Object, {
  scala_runtime_Tuple2Zipped$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_Tuple2Zipped$.prototype.$classData = ScalaJS.data.scala_runtime_Tuple2Zipped$;
ScalaJS.moduleInstances.scala_runtime_Tuple2Zipped = undefined;
ScalaJS.modules.scala_runtime_Tuple2Zipped = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_Tuple2Zipped)) {
    ScalaJS.moduleInstances.scala_runtime_Tuple2Zipped = new ScalaJS.c.scala_runtime_Tuple2Zipped$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_Tuple2Zipped
});
//@ sourceMappingURL=Tuple2Zipped$.js.map
