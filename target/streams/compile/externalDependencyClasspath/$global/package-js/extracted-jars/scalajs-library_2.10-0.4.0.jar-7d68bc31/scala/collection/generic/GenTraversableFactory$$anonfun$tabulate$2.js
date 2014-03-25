/** @constructor */
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.n2$7$2 = 0;
  this.n3$6$2 = 0;
  this.f$3$f = null
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype.constructor = ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2;
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype.apply__I__Lscala_collection_GenTraversable = (function(i1$2) {
  return this.$$outer$2.tabulate__I__I__Lscala_Function2__Lscala_collection_GenTraversable(this.n2$7$2, this.n3$6$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer, i1$2) {
    return (function(x$8, x$9) {
      x$8 = ScalaJS.uI(x$8);
      x$9 = ScalaJS.uI(x$9);
      return arg$outer.f$3$f.apply__O__O__O__O(ScalaJS.bI(i1$2), ScalaJS.bI(x$8), ScalaJS.bI(x$9))
    })
  })(this, i1$2)))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype.apply__O__O = (function(v1) {
  return this.apply__I__Lscala_collection_GenTraversable(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype.init___Lscala_collection_generic_GenTraversableFactory__I__I__Lscala_Function3 = (function($$outer, n2$7, n3$6, f$3) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.n2$7$2 = n2$7;
  this.n3$6$2 = n3$6;
  this.f$3$f = f$3;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype.apply__I__ = (function(i1) {
  return this.apply__I__Lscala_collection_GenTraversable(i1)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype = ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype;
ScalaJS.is.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2)))
});
ScalaJS.as.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenTraversableFactory$$anonfun$tabulate$2")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenTraversableFactory$$anonfun$tabulate$2;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2 = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2: 0
}, false, "scala.collection.generic.GenTraversableFactory$$anonfun$tabulate$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2.prototype.$classData = ScalaJS.data.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2;
//@ sourceMappingURL=GenTraversableFactory$$anonfun$tabulate$2.js.map
