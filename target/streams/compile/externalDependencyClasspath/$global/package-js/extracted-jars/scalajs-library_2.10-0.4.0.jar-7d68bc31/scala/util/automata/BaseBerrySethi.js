/** @constructor */
ScalaJS.c.scala_util_automata_BaseBerrySethi = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pos$1 = 0;
  this.follow$1 = null;
  this.finalTag$1 = 0;
  this.finals$1 = null;
  this.emptySet$1 = null
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.constructor = ScalaJS.c.scala_util_automata_BaseBerrySethi;
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.pos__I = (function() {
  return this.pos$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.pos$und$eq__I__V = (function(x$1) {
  this.pos$1 = x$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.follow__Lscala_collection_mutable_HashMap = (function() {
  return this.follow$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.follow$und$eq__Lscala_collection_mutable_HashMap__V = (function(x$1) {
  this.follow$1 = x$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finalTag__I = (function() {
  return this.finalTag$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finalTag$und$eq__I__V = (function(x$1) {
  this.finalTag$1 = x$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finals__Lscala_collection_immutable_Map = (function() {
  return this.finals$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finals$und$eq__Lscala_collection_immutable_Map__V = (function(x$1) {
  this.finals$1 = x$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.emptySet__Lscala_collection_immutable_Set = (function() {
  return this.emptySet$1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.doComp__p1__Lscala_util_regexp_Base$RegExp__Lscala_Function1__Lscala_collection_immutable_Set = (function(r, compFunction) {
  var x1 = r;
  if (ScalaJS.is.scala_util_regexp_Base$Alt(x1)) {
    var x3 = ScalaJS.as.scala_util_regexp_Base$Alt(x1);
    return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.as.scala_collection_TraversableOnce(x3.rs__Lscala_collection_Seq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(r) {
        return arg$outer.compFirst__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r)
      })
    })(this)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).foldLeft__O__Lscala_Function2__O(this.emptySet__Lscala_collection_immutable_Set(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
      return (function(x$1, x$2) {
        return ScalaJS.as.scala_collection_immutable_Set(x$1.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(x$2))
      })
    })())))
  };
  if (ScalaJS.anyRefEqEq(this.lang__Lscala_util_regexp_Base().Eps__Lscala_util_regexp_Base$Eps$(), x1)) {
    return this.emptySet__Lscala_collection_immutable_Set()
  };
  if (ScalaJS.is.scala_util_regexp_Base$Meta(x1)) {
    var x5 = ScalaJS.as.scala_util_regexp_Base$Meta(x1);
    return ScalaJS.as.scala_collection_immutable_Set(compFunction.apply__O__O(x5.r__Lscala_util_regexp_Base$RegExp()))
  };
  if (ScalaJS.is.scala_util_regexp_Base$Sequ(x1)) {
    var x6 = ScalaJS.as.scala_util_regexp_Base$Sequ(x1);
    var x1$2 = x6.rs__Lscala_collection_Seq().span__Lscala_Function1__Lscala_Tuple2(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$3) {
        return ScalaJS.bZ(x$3.isNullable__Z())
      })
    })()));
    matchEnd3: {
      if ((x1$2 !== null)) {
        var l1 = ScalaJS.as.scala_collection_Seq(x1$2.$$und1__O());
        var l2 = ScalaJS.as.scala_collection_Seq(x1$2.$$und2__O());
        var x$4 = new ScalaJS.c.scala_Tuple2().init___O__O(l1, l2);
        break matchEnd3
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
    };
    var l1$2 = ScalaJS.as.scala_collection_Seq(x$4.$$und1__O());
    var l2$2 = ScalaJS.as.scala_collection_Seq(x$4.$$und2__O());
    return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_TraversableLike(l1$2.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.as.scala_collection_GenTraversableOnce(l2$2.take__I__O(1)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(compFunction, ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).foldLeft__O__Lscala_Function2__O(this.emptySet__Lscala_collection_immutable_Set(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
      return (function(x$5, x$6) {
        return ScalaJS.as.scala_collection_immutable_Set(x$5.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(x$6))
      })
    })())))
  };
  if (ScalaJS.is.scala_util_regexp_Base$Star(x1)) {
    var x2 = ScalaJS.as.scala_util_regexp_Base$Star(x1);
    var t = x2.r__Lscala_util_regexp_Base$RegExp();
    return ScalaJS.as.scala_collection_immutable_Set(compFunction.apply__O__O(t))
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("unexpected pattern " + ScalaJS.objectGetClass(r)))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFirst__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(r) {
  return this.doComp__p1__Lscala_util_regexp_Base$RegExp__Lscala_Function1__Lscala_collection_immutable_Set(r, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(r) {
      return arg$outer.compFirst__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r)
    })
  })(this)))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compLast__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(r) {
  return this.doComp__p1__Lscala_util_regexp_Base$RegExp__Lscala_Function1__Lscala_collection_immutable_Set(r, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(r) {
      return arg$outer.compLast__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r)
    })
  })(this)))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFollow__Lscala_collection_Seq__Lscala_collection_immutable_Set = (function(rs) {
  var jsx$3 = this.follow__Lscala_collection_mutable_HashMap();
  var jsx$2 = ScalaJS.bI(0);
  if (rs.isEmpty__Z()) {
    var jsx$1 = this.emptySet__Lscala_collection_immutable_Set()
  } else {
    var jsx$1 = rs.foldRight__O__Lscala_Function2__O(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [this.pos__I()]))), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer) {
      return (function(p, fol) {
        var first = arg$outer.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(fol, p);
        if (p.isNullable__Z()) {
          return ScalaJS.as.scala_collection_immutable_Set(fol.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(first))
        } else {
          return first
        }
      })
    })(this)))
  };
  jsx$3.update__O__O__V(jsx$2, jsx$1);
  return ScalaJS.as.scala_collection_immutable_Set(this.follow__Lscala_collection_mutable_HashMap().apply__O__O(ScalaJS.bI(0)))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(fol1, r) {
  var x1 = r;
  if (ScalaJS.is.scala_util_regexp_Base$Alt(x1)) {
    var x2 = ScalaJS.as.scala_util_regexp_Base$Alt(x1);
    return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_collection_generic_GenericTraversableTemplate(x2.rs__Lscala_collection_Seq().reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, fol1$1) {
      return (function(x$7) {
        return arg$outer.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(fol1$1, x$7)
      })
    })(this, fol1)), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).flatten__Lscala_Function1__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less()))))
  };
  if (ScalaJS.is.scala_util_regexp_Base$Meta(x1)) {
    var x3 = ScalaJS.as.scala_util_regexp_Base$Meta(x1);
    return this.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(fol1, x3.r__Lscala_util_regexp_Base$RegExp())
  };
  if (ScalaJS.is.scala_util_regexp_Base$Star(x1)) {
    var x4 = ScalaJS.as.scala_util_regexp_Base$Star(x1);
    return this.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(fol1.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this.compFirst__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(x4.r__Lscala_util_regexp_Base$RegExp()))), x4.r__Lscala_util_regexp_Base$RegExp())
  };
  if (ScalaJS.is.scala_util_regexp_Base$Sequ(x1)) {
    var x5 = ScalaJS.as.scala_util_regexp_Base$Sequ(x1);
    return ScalaJS.as.scala_collection_immutable_Set(x5.rs__Lscala_collection_Seq().foldRight__O__Lscala_Function2__O(fol1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer) {
      return (function(p, fol) {
        var first = arg$outer.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(fol, p);
        if (p.isNullable__Z()) {
          return ScalaJS.as.scala_collection_immutable_Set(fol.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(first))
        } else {
          return first
        }
      })
    })(this))))
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("unexpected pattern: " + ScalaJS.objectGetClass(r)))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.traverse__Lscala_util_regexp_Base$RegExp__V = (function(r) {
  var x1 = r;
  matchEnd7: {
    if (ScalaJS.is.scala_util_regexp_Base$Alt(x1)) {
      var x3 = ScalaJS.as.scala_util_regexp_Base$Alt(x1);
      x3.rs__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(r) {
          arg$outer.traverse__Lscala_util_regexp_Base$RegExp__V(r);
          return ScalaJS.bV(undefined)
        })
      })(this)));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    if (ScalaJS.is.scala_util_regexp_Base$Sequ(x1)) {
      var x4 = ScalaJS.as.scala_util_regexp_Base$Sequ(x1);
      x4.rs__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(r) {
          arg$outer.traverse__Lscala_util_regexp_Base$RegExp__V(r);
          return ScalaJS.bV(undefined)
        })
      })(this)));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    if (ScalaJS.is.scala_util_regexp_Base$Meta(x1)) {
      var x5 = ScalaJS.as.scala_util_regexp_Base$Meta(x1);
      this.traverse__Lscala_util_regexp_Base$RegExp__V(x5.r__Lscala_util_regexp_Base$RegExp());
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    if (ScalaJS.is.scala_util_regexp_Base$Star(x1)) {
      var x2 = ScalaJS.as.scala_util_regexp_Base$Star(x1);
      var t = x2.r__Lscala_util_regexp_Base$RegExp();
      this.traverse__Lscala_util_regexp_Base$RegExp__V(t);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("unexp pattern " + ScalaJS.objectGetClass(r)))
  }
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.pos$1 = 0;
  this.emptySet$1 = ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()));
  return this
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.traverse__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return ScalaJS.bV(this.traverse__Lscala_util_regexp_Base$RegExp__V(r))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__ = (function(fol1, r$2) {
  return this.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(fol1, r$2)
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFollow__Lscala_collection_Seq__ = (function(rs) {
  return this.compFollow__Lscala_collection_Seq__Lscala_collection_immutable_Set(rs)
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compLast__Lscala_util_regexp_Base$RegExp__ = (function(r$3) {
  return this.compLast__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r$3)
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFirst__Lscala_util_regexp_Base$RegExp__ = (function(r$4) {
  return this.compFirst__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set(r$4)
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.emptySet__ = (function() {
  return this.emptySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finals$und$eq__Lscala_collection_immutable_Map__ = (function(x$1) {
  return ScalaJS.bV(this.finals$und$eq__Lscala_collection_immutable_Map__V(x$1))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finals__ = (function() {
  return this.finals__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finalTag$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.finalTag$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.finalTag__ = (function() {
  return ScalaJS.bI(this.finalTag__I())
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.follow$und$eq__Lscala_collection_mutable_HashMap__ = (function(x$1$3) {
  return ScalaJS.bV(this.follow$und$eq__Lscala_collection_mutable_HashMap__V(x$1$3))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.follow__ = (function() {
  return this.follow__Lscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.pos$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.pos$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.pos__ = (function() {
  return ScalaJS.bI(this.pos__I())
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.lang__ = (function() {
  return this.lang__Lscala_util_regexp_Base()
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_BaseBerrySethi = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_BaseBerrySethi.prototype = ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype;
ScalaJS.is.scala_util_automata_BaseBerrySethi = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_BaseBerrySethi)))
});
ScalaJS.as.scala_util_automata_BaseBerrySethi = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_BaseBerrySethi(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.BaseBerrySethi")
  }
});
ScalaJS.isArrayOf.scala_util_automata_BaseBerrySethi = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_BaseBerrySethi)))
});
ScalaJS.asArrayOf.scala_util_automata_BaseBerrySethi = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_BaseBerrySethi(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.BaseBerrySethi;", depth)
  }
});
ScalaJS.data.scala_util_automata_BaseBerrySethi = new ScalaJS.ClassTypeData({
  scala_util_automata_BaseBerrySethi: 0
}, false, "scala.util.automata.BaseBerrySethi", ScalaJS.data.java_lang_Object, {
  scala_util_automata_BaseBerrySethi: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.$classData = ScalaJS.data.scala_util_automata_BaseBerrySethi;
//@ sourceMappingURL=BaseBerrySethi.js.map
