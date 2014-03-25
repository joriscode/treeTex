/** @constructor */
ScalaJS.c.scala_collection_convert_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.decorateAsJava$1 = null;
  this.decorateAsScala$1 = null;
  this.decorateAll$1 = null;
  this.wrapAsJava$1 = null;
  this.wrapAsScala$1 = null;
  this.wrapAll$1 = null
});
ScalaJS.c.scala_collection_convert_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_package$.prototype.constructor = ScalaJS.c.scala_collection_convert_package$;
ScalaJS.c.scala_collection_convert_package$.prototype.decorateAsJava__Lscala_collection_convert_DecorateAsJava = (function() {
  return this.decorateAsJava$1
});
ScalaJS.c.scala_collection_convert_package$.prototype.decorateAsScala__Lscala_collection_convert_DecorateAsScala = (function() {
  return this.decorateAsScala$1
});
ScalaJS.c.scala_collection_convert_package$.prototype.decorateAll__Lscala_collection_convert_DecorateAsJava = (function() {
  return this.decorateAll$1
});
ScalaJS.c.scala_collection_convert_package$.prototype.wrapAsJava__Lscala_collection_convert_WrapAsJava = (function() {
  return this.wrapAsJava$1
});
ScalaJS.c.scala_collection_convert_package$.prototype.wrapAsScala__Lscala_collection_convert_WrapAsScala = (function() {
  return this.wrapAsScala$1
});
ScalaJS.c.scala_collection_convert_package$.prototype.wrapAll__Lscala_collection_convert_WrapAsJava = (function() {
  return this.wrapAll$1
});
ScalaJS.c.scala_collection_convert_package$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_convert_package = this;
  this.decorateAsJava$1 = new ScalaJS.c.scala_collection_convert_package$$anon$4().init___();
  this.decorateAsScala$1 = new ScalaJS.c.scala_collection_convert_package$$anon$5().init___();
  this.decorateAll$1 = new ScalaJS.c.scala_collection_convert_package$$anon$2().init___();
  this.wrapAsJava$1 = new ScalaJS.c.scala_collection_convert_package$$anon$6().init___();
  this.wrapAsScala$1 = new ScalaJS.c.scala_collection_convert_package$$anon$3().init___();
  this.wrapAll$1 = new ScalaJS.c.scala_collection_convert_package$$anon$1().init___();
  return this
});
ScalaJS.c.scala_collection_convert_package$.prototype.wrapAll__ = (function() {
  return this.wrapAll__Lscala_collection_convert_WrapAsJava()
});
ScalaJS.c.scala_collection_convert_package$.prototype.wrapAsScala__ = (function() {
  return this.wrapAsScala__Lscala_collection_convert_WrapAsScala()
});
ScalaJS.c.scala_collection_convert_package$.prototype.wrapAsJava__ = (function() {
  return this.wrapAsJava__Lscala_collection_convert_WrapAsJava()
});
ScalaJS.c.scala_collection_convert_package$.prototype.decorateAll__ = (function() {
  return this.decorateAll__Lscala_collection_convert_DecorateAsJava()
});
ScalaJS.c.scala_collection_convert_package$.prototype.decorateAsScala__ = (function() {
  return this.decorateAsScala__Lscala_collection_convert_DecorateAsScala()
});
ScalaJS.c.scala_collection_convert_package$.prototype.decorateAsJava__ = (function() {
  return this.decorateAsJava__Lscala_collection_convert_DecorateAsJava()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_package$.prototype = ScalaJS.c.scala_collection_convert_package$.prototype;
ScalaJS.is.scala_collection_convert_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_package$)))
});
ScalaJS.as.scala_collection_convert_package$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.package")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_package$)))
});
ScalaJS.asArrayOf.scala_collection_convert_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.package;", depth)
  }
});
ScalaJS.data.scala_collection_convert_package$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_package$: 0
}, false, "scala.collection.convert.package$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_package$.prototype.$classData = ScalaJS.data.scala_collection_convert_package$;
ScalaJS.moduleInstances.scala_collection_convert_package = undefined;
ScalaJS.modules.scala_collection_convert_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_convert_package)) {
    ScalaJS.moduleInstances.scala_collection_convert_package = new ScalaJS.c.scala_collection_convert_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_convert_package
});
//@ sourceMappingURL=package$.js.map
