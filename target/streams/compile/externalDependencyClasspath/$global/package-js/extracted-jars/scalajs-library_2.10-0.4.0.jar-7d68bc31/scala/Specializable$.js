/** @constructor */
ScalaJS.c.scala_Specializable$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.Primitives$1 = null;
  this.Everything$1 = null;
  this.Bits32AndUp$1 = null;
  this.Integral$1 = null;
  this.AllNumeric$1 = null;
  this.BestOfBreed$1 = null
});
ScalaJS.c.scala_Specializable$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Specializable$.prototype.constructor = ScalaJS.c.scala_Specializable$;
ScalaJS.c.scala_Specializable$.prototype.Primitives__Lscala_Specializable$Group = (function() {
  return this.Primitives$1
});
ScalaJS.c.scala_Specializable$.prototype.Everything__Lscala_Specializable$Group = (function() {
  return this.Everything$1
});
ScalaJS.c.scala_Specializable$.prototype.Bits32AndUp__Lscala_Specializable$Group = (function() {
  return this.Bits32AndUp$1
});
ScalaJS.c.scala_Specializable$.prototype.Integral__Lscala_Specializable$Group = (function() {
  return this.Integral$1
});
ScalaJS.c.scala_Specializable$.prototype.AllNumeric__Lscala_Specializable$Group = (function() {
  return this.AllNumeric$1
});
ScalaJS.c.scala_Specializable$.prototype.BestOfBreed__Lscala_Specializable$Group = (function() {
  return this.BestOfBreed$1
});
ScalaJS.c.scala_Specializable$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_Specializable = this;
  this.Primitives$1 = new ScalaJS.c.scala_Specializable$Group().init___O(new ScalaJS.c.scala_Tuple9().init___O__O__O__O__O__O__O__O__O(ScalaJS.modules.scala_Byte(), ScalaJS.modules.scala_Short(), ScalaJS.modules.scala_Int(), ScalaJS.modules.scala_Long(), ScalaJS.modules.scala_Char(), ScalaJS.modules.scala_Float(), ScalaJS.modules.scala_Double(), ScalaJS.modules.scala_Boolean(), ScalaJS.modules.scala_Unit()));
  this.Everything$1 = new ScalaJS.c.scala_Specializable$Group().init___O(new ScalaJS.c.scala_Tuple10().init___O__O__O__O__O__O__O__O__O__O(ScalaJS.modules.scala_Byte(), ScalaJS.modules.scala_Short(), ScalaJS.modules.scala_Int(), ScalaJS.modules.scala_Long(), ScalaJS.modules.scala_Char(), ScalaJS.modules.scala_Float(), ScalaJS.modules.scala_Double(), ScalaJS.modules.scala_Boolean(), ScalaJS.modules.scala_Unit(), ScalaJS.modules.scala_package().AnyRef__Lscala_Specializable()));
  this.Bits32AndUp$1 = new ScalaJS.c.scala_Specializable$Group().init___O(new ScalaJS.c.scala_Tuple4().init___O__O__O__O(ScalaJS.modules.scala_Int(), ScalaJS.modules.scala_Long(), ScalaJS.modules.scala_Float(), ScalaJS.modules.scala_Double()));
  this.Integral$1 = new ScalaJS.c.scala_Specializable$Group().init___O(new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(ScalaJS.modules.scala_Byte(), ScalaJS.modules.scala_Short(), ScalaJS.modules.scala_Int(), ScalaJS.modules.scala_Long(), ScalaJS.modules.scala_Char()));
  this.AllNumeric$1 = new ScalaJS.c.scala_Specializable$Group().init___O(new ScalaJS.c.scala_Tuple7().init___O__O__O__O__O__O__O(ScalaJS.modules.scala_Byte(), ScalaJS.modules.scala_Short(), ScalaJS.modules.scala_Int(), ScalaJS.modules.scala_Long(), ScalaJS.modules.scala_Char(), ScalaJS.modules.scala_Float(), ScalaJS.modules.scala_Double()));
  this.BestOfBreed$1 = new ScalaJS.c.scala_Specializable$Group().init___O(new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(ScalaJS.modules.scala_Int(), ScalaJS.modules.scala_Double(), ScalaJS.modules.scala_Boolean(), ScalaJS.modules.scala_Unit(), ScalaJS.modules.scala_package().AnyRef__Lscala_Specializable()));
  return this
});
ScalaJS.c.scala_Specializable$.prototype.BestOfBreed__ = (function() {
  return this.BestOfBreed__Lscala_Specializable$Group()
});
ScalaJS.c.scala_Specializable$.prototype.AllNumeric__ = (function() {
  return this.AllNumeric__Lscala_Specializable$Group()
});
ScalaJS.c.scala_Specializable$.prototype.Integral__ = (function() {
  return this.Integral__Lscala_Specializable$Group()
});
ScalaJS.c.scala_Specializable$.prototype.Bits32AndUp__ = (function() {
  return this.Bits32AndUp__Lscala_Specializable$Group()
});
ScalaJS.c.scala_Specializable$.prototype.Everything__ = (function() {
  return this.Everything__Lscala_Specializable$Group()
});
ScalaJS.c.scala_Specializable$.prototype.Primitives__ = (function() {
  return this.Primitives__Lscala_Specializable$Group()
});
/** @constructor */
ScalaJS.inheritable.scala_Specializable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Specializable$.prototype = ScalaJS.c.scala_Specializable$.prototype;
ScalaJS.is.scala_Specializable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Specializable$)))
});
ScalaJS.as.scala_Specializable$ = (function(obj) {
  if ((ScalaJS.is.scala_Specializable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Specializable")
  }
});
ScalaJS.isArrayOf.scala_Specializable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Specializable$)))
});
ScalaJS.asArrayOf.scala_Specializable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Specializable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Specializable;", depth)
  }
});
ScalaJS.data.scala_Specializable$ = new ScalaJS.ClassTypeData({
  scala_Specializable$: 0
}, false, "scala.Specializable$", ScalaJS.data.java_lang_Object, {
  scala_Specializable$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Specializable$.prototype.$classData = ScalaJS.data.scala_Specializable$;
ScalaJS.moduleInstances.scala_Specializable = undefined;
ScalaJS.modules.scala_Specializable = (function() {
  if ((!ScalaJS.moduleInstances.scala_Specializable)) {
    ScalaJS.moduleInstances.scala_Specializable = new ScalaJS.c.scala_Specializable$().init___()
  };
  return ScalaJS.moduleInstances.scala_Specializable
});
//@ sourceMappingURL=Specializable$.js.map
