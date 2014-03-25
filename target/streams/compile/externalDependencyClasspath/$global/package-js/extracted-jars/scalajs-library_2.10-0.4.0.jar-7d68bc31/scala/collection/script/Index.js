/** @constructor */
ScalaJS.c.scala_collection_script_Index = (function() {
  ScalaJS.c.scala_collection_script_Location.call(this);
  this.n$2 = 0
});
ScalaJS.c.scala_collection_script_Index.prototype = new ScalaJS.inheritable.scala_collection_script_Location();
ScalaJS.c.scala_collection_script_Index.prototype.constructor = ScalaJS.c.scala_collection_script_Index;
ScalaJS.c.scala_collection_script_Index.prototype.n__I = (function() {
  return this.n$2
});
ScalaJS.c.scala_collection_script_Index.prototype.copy__I__Lscala_collection_script_Index = (function(n) {
  return new ScalaJS.c.scala_collection_script_Index().init___I(n)
});
ScalaJS.c.scala_collection_script_Index.prototype.copy$default$1__I = (function() {
  return this.n__I()
});
ScalaJS.c.scala_collection_script_Index.prototype.productPrefix__T = (function() {
  return "Index"
});
ScalaJS.c.scala_collection_script_Index.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_script_Index.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bI(this.n__I());
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_script_Index.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_script_Index.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_script_Index(x$1)
});
ScalaJS.c.scala_collection_script_Index.prototype.hashCode__I = (function() {
  var acc = -889275714;
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.n__I());
  return ScalaJS.modules.scala_runtime_Statics().finalizeHash__I__I__I(acc, 1)
});
ScalaJS.c.scala_collection_script_Index.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_script_Index.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_collection_script_Index(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Index$1 = ScalaJS.as.scala_collection_script_Index(x$1);
      return ((this.n__I() === Index$1.n__I()) && Index$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_script_Index.prototype.init___I = (function(n) {
  this.n$2 = n;
  ScalaJS.c.scala_collection_script_Location.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_script_Index.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_script_Index.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_script_Index.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_script_Index.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_script_Index.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_script_Index.prototype.copy__I__ = (function(n) {
  return this.copy__I__Lscala_collection_script_Index(n)
});
ScalaJS.c.scala_collection_script_Index.prototype.n__ = (function() {
  return ScalaJS.bI(this.n__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Index = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Index.prototype = ScalaJS.c.scala_collection_script_Index.prototype;
ScalaJS.is.scala_collection_script_Index = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Index)))
});
ScalaJS.as.scala_collection_script_Index = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Index(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Index")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Index = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Index)))
});
ScalaJS.asArrayOf.scala_collection_script_Index = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Index(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Index;", depth)
  }
});
ScalaJS.data.scala_collection_script_Index = new ScalaJS.ClassTypeData({
  scala_collection_script_Index: 0
}, false, "scala.collection.script.Index", ScalaJS.data.scala_collection_script_Location, {
  scala_collection_script_Index: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Location: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Index.prototype.$classData = ScalaJS.data.scala_collection_script_Index;
//@ sourceMappingURL=Index.js.map
