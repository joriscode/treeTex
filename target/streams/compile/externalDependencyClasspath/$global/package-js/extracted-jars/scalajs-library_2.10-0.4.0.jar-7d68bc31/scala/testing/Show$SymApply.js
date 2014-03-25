/** @constructor */
ScalaJS.c.scala_testing_Show$SymApply = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.f$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_testing_Show$SymApply.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_testing_Show$SymApply.prototype.constructor = ScalaJS.c.scala_testing_Show$SymApply;
ScalaJS.c.scala_testing_Show$SymApply.prototype.apply__Lscala_collection_Seq__V = (function(args) {
  ScalaJS.modules.scala_Predef().println__O__V(this.scala$testing$Show$SymApply$$$outer__Lscala_testing_Show().test__Lscala_Symbol__Lscala_collection_Seq__T(this.f$1, args))
});
ScalaJS.c.scala_testing_Show$SymApply.prototype.scala$testing$Show$SymApply$$$outer__Lscala_testing_Show = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_testing_Show$SymApply.prototype.init___Lscala_testing_Show__Lscala_Symbol = (function($$outer, f) {
  this.f$1 = f;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_testing_Show$SymApply.prototype.scala$testing$Show$SymApply$$$outer__ = (function() {
  return this.scala$testing$Show$SymApply$$$outer__Lscala_testing_Show()
});
ScalaJS.c.scala_testing_Show$SymApply.prototype.apply__Lscala_collection_Seq__ = (function(args) {
  return ScalaJS.bV(this.apply__Lscala_collection_Seq__V(args))
});
/** @constructor */
ScalaJS.inheritable.scala_testing_Show$SymApply = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_testing_Show$SymApply.prototype = ScalaJS.c.scala_testing_Show$SymApply.prototype;
ScalaJS.is.scala_testing_Show$SymApply = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_testing_Show$SymApply)))
});
ScalaJS.as.scala_testing_Show$SymApply = (function(obj) {
  if ((ScalaJS.is.scala_testing_Show$SymApply(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.testing.Show$SymApply")
  }
});
ScalaJS.isArrayOf.scala_testing_Show$SymApply = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_testing_Show$SymApply)))
});
ScalaJS.asArrayOf.scala_testing_Show$SymApply = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_testing_Show$SymApply(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.testing.Show$SymApply;", depth)
  }
});
ScalaJS.data.scala_testing_Show$SymApply = new ScalaJS.ClassTypeData({
  scala_testing_Show$SymApply: 0
}, false, "scala.testing.Show$SymApply", ScalaJS.data.java_lang_Object, {
  scala_testing_Show$SymApply: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_testing_Show$SymApply.prototype.$classData = ScalaJS.data.scala_testing_Show$SymApply;
//@ sourceMappingURL=Show$SymApply.js.map
