/** @constructor */
ScalaJS.c.scala_Option$WithFilter = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$Option$WithFilter$$p$f = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_Option$WithFilter.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Option$WithFilter.prototype.constructor = ScalaJS.c.scala_Option$WithFilter;
ScalaJS.c.scala_Option$WithFilter.prototype.map__Lscala_Function1__Lscala_Option = (function(f) {
  return this.scala$Option$WithFilter$$$outer__Lscala_Option().filter__Lscala_Function1__Lscala_Option(this.scala$Option$WithFilter$$p$f).map__Lscala_Function1__Lscala_Option(f)
});
ScalaJS.c.scala_Option$WithFilter.prototype.flatMap__Lscala_Function1__Lscala_Option = (function(f) {
  return this.scala$Option$WithFilter$$$outer__Lscala_Option().filter__Lscala_Function1__Lscala_Option(this.scala$Option$WithFilter$$p$f).flatMap__Lscala_Function1__Lscala_Option(f)
});
ScalaJS.c.scala_Option$WithFilter.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.scala$Option$WithFilter$$$outer__Lscala_Option().filter__Lscala_Function1__Lscala_Option(this.scala$Option$WithFilter$$p$f).foreach__Lscala_Function1__V(f)
});
ScalaJS.c.scala_Option$WithFilter.prototype.withFilter__Lscala_Function1__Lscala_Option$WithFilter = (function(q) {
  return new ScalaJS.c.scala_Option$WithFilter().init___Lscala_Option__Lscala_Function1(this.scala$Option$WithFilter$$$outer__Lscala_Option(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, q$1) {
    return (function(x) {
      return ScalaJS.bZ((ScalaJS.uZ(arg$outer.scala$Option$WithFilter$$p$f.apply__O__O(x)) && ScalaJS.uZ(q$1.apply__O__O(x))))
    })
  })(this, q)))
});
ScalaJS.c.scala_Option$WithFilter.prototype.scala$Option$WithFilter$$$outer__Lscala_Option = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_Option$WithFilter.prototype.init___Lscala_Option__Lscala_Function1 = (function($$outer, p) {
  this.scala$Option$WithFilter$$p$f = p;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_Option$WithFilter.prototype.scala$Option$WithFilter$$$outer__ = (function() {
  return this.scala$Option$WithFilter$$$outer__Lscala_Option()
});
ScalaJS.c.scala_Option$WithFilter.prototype.withFilter__Lscala_Function1__ = (function(q) {
  return this.withFilter__Lscala_Function1__Lscala_Option$WithFilter(q)
});
ScalaJS.c.scala_Option$WithFilter.prototype.foreach__Lscala_Function1__ = (function(f) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f))
});
ScalaJS.c.scala_Option$WithFilter.prototype.flatMap__Lscala_Function1__ = (function(f$2) {
  return this.flatMap__Lscala_Function1__Lscala_Option(f$2)
});
ScalaJS.c.scala_Option$WithFilter.prototype.map__Lscala_Function1__ = (function(f$3) {
  return this.map__Lscala_Function1__Lscala_Option(f$3)
});
/** @constructor */
ScalaJS.inheritable.scala_Option$WithFilter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Option$WithFilter.prototype = ScalaJS.c.scala_Option$WithFilter.prototype;
ScalaJS.is.scala_Option$WithFilter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Option$WithFilter)))
});
ScalaJS.as.scala_Option$WithFilter = (function(obj) {
  if ((ScalaJS.is.scala_Option$WithFilter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Option$WithFilter")
  }
});
ScalaJS.isArrayOf.scala_Option$WithFilter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Option$WithFilter)))
});
ScalaJS.asArrayOf.scala_Option$WithFilter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Option$WithFilter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Option$WithFilter;", depth)
  }
});
ScalaJS.data.scala_Option$WithFilter = new ScalaJS.ClassTypeData({
  scala_Option$WithFilter: 0
}, false, "scala.Option$WithFilter", ScalaJS.data.java_lang_Object, {
  scala_Option$WithFilter: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Option$WithFilter.prototype.$classData = ScalaJS.data.scala_Option$WithFilter;
//@ sourceMappingURL=Option$WithFilter.js.map
