/** @constructor */
ScalaJS.c.scala_collection_concurrent_INode$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.KEY$undPRESENT$1 = null;
  this.KEY$undABSENT$1 = null
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_INode$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_INode$;
ScalaJS.c.scala_collection_concurrent_INode$.prototype.KEY$undPRESENT__O = (function() {
  return this.KEY$undPRESENT$1
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype.KEY$undABSENT__O = (function() {
  return this.KEY$undABSENT$1
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype.newRootNode__Lscala_collection_concurrent_INode = (function() {
  var gen = new ScalaJS.c.scala_collection_concurrent_Gen().init___();
  var cn = new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen(0, ScalaJS.newArrayObject(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [0]), gen);
  return new ScalaJS.c.scala_collection_concurrent_INode().init___Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_Gen(cn, gen)
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_concurrent_INode = this;
  this.KEY$undPRESENT$1 = new ScalaJS.c.java_lang_Object().init___();
  this.KEY$undABSENT$1 = new ScalaJS.c.java_lang_Object().init___();
  return this
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype.newRootNode__ = (function() {
  return this.newRootNode__Lscala_collection_concurrent_INode()
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype.KEY$undABSENT__ = (function() {
  return this.KEY$undABSENT__O()
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype.KEY$undPRESENT__ = (function() {
  return this.KEY$undPRESENT__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_INode$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_INode$.prototype = ScalaJS.c.scala_collection_concurrent_INode$.prototype;
ScalaJS.is.scala_collection_concurrent_INode$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_INode$)))
});
ScalaJS.as.scala_collection_concurrent_INode$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_INode$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.INode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_INode$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_INode$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_INode$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_INode$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.INode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_INode$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_INode$: 0
}, false, "scala.collection.concurrent.INode$", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_INode$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_INode$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_INode$;
ScalaJS.moduleInstances.scala_collection_concurrent_INode = undefined;
ScalaJS.modules.scala_collection_concurrent_INode = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_INode)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_INode = new ScalaJS.c.scala_collection_concurrent_INode$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_INode
});
//@ sourceMappingURL=INode$.js.map
