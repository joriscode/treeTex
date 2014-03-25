/** @constructor */
ScalaJS.c.scala_collection_TraversableLike$WithFilter = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$collection$TraversableLike$WithFilter$$p$f = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.constructor = ScalaJS.c.scala_collection_TraversableLike$WithFilter;
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder(this.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike().repr__O());
  this.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$1, b$12) {
    return (function(x) {
      if (ScalaJS.uZ(arg$outer.scala$collection$TraversableLike$WithFilter$$p$f.apply__O__O(x))) {
        return b$12.$$plus$eq__O__Lscala_collection_mutable_Builder(f$1.apply__O__O(x))
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this, f, b)));
  return b.result__O()
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder(this.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike().repr__O());
  this.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$2, b$13) {
    return (function(x) {
      if (ScalaJS.uZ(arg$outer.scala$collection$TraversableLike$WithFilter$$p$f.apply__O__O(x))) {
        return b$13.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_GenTraversableOnce(f$2.apply__O__O(x)).seq__Lscala_collection_TraversableOnce())
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this, f, b)));
  return b.result__O()
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$3) {
    return (function(x) {
      if (ScalaJS.uZ(arg$outer.scala$collection$TraversableLike$WithFilter$$p$f.apply__O__O(x))) {
        return f$3.apply__O__O(x)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this, f)))
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.withFilter__Lscala_Function1__Lscala_collection_TraversableLike$WithFilter = (function(q) {
  return new ScalaJS.c.scala_collection_TraversableLike$WithFilter().init___Lscala_collection_TraversableLike__Lscala_Function1(this.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, q$1) {
    return (function(x) {
      return ScalaJS.bZ((ScalaJS.uZ(arg$outer.scala$collection$TraversableLike$WithFilter$$p$f.apply__O__O(x)) && ScalaJS.uZ(q$1.apply__O__O(x))))
    })
  })(this, q)))
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function(p) {
  return this.withFilter__Lscala_Function1__Lscala_collection_TraversableLike$WithFilter(p)
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.init___Lscala_collection_TraversableLike__Lscala_Function1 = (function($$outer, p) {
  this.scala$collection$TraversableLike$WithFilter$$p$f = p;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.scala$collection$TraversableLike$WithFilter$$$outer__ = (function() {
  return this.scala$collection$TraversableLike$WithFilter$$$outer__Lscala_collection_TraversableLike()
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.withFilter__Lscala_Function1__ = (function(q) {
  return this.withFilter__Lscala_Function1__Lscala_collection_TraversableLike$WithFilter(q)
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.foreach__Lscala_Function1__ = (function(f) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f))
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$2, bf) {
  return this.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$2, bf)
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$3, bf$2) {
  return this.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$3, bf$2)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_TraversableLike$WithFilter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_TraversableLike$WithFilter.prototype = ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype;
ScalaJS.is.scala_collection_TraversableLike$WithFilter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableLike$WithFilter)))
});
ScalaJS.as.scala_collection_TraversableLike$WithFilter = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableLike$WithFilter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableLike$WithFilter")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableLike$WithFilter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableLike$WithFilter)))
});
ScalaJS.asArrayOf.scala_collection_TraversableLike$WithFilter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableLike$WithFilter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableLike$WithFilter;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableLike$WithFilter = new ScalaJS.ClassTypeData({
  scala_collection_TraversableLike$WithFilter: 0
}, false, "scala.collection.TraversableLike$WithFilter", ScalaJS.data.java_lang_Object, {
  scala_collection_TraversableLike$WithFilter: 1,
  scala_collection_generic_FilterMonadic: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.$classData = ScalaJS.data.scala_collection_TraversableLike$WithFilter;
//@ sourceMappingURL=TraversableLike$WithFilter.js.map
