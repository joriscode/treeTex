/** @constructor */
ScalaJS.c.scala_collection_script_Remove = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.location$1 = null;
  this.elem$1 = null
});
ScalaJS.c.scala_collection_script_Remove.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Remove.prototype.constructor = ScalaJS.c.scala_collection_script_Remove;
ScalaJS.c.scala_collection_script_Remove.prototype.location__Lscala_collection_script_Location = (function() {
  return this.location$1
});
ScalaJS.c.scala_collection_script_Remove.prototype.elem__O = (function() {
  return this.elem$1
});
ScalaJS.c.scala_collection_script_Remove.prototype.copy__Lscala_collection_script_Location__O__Lscala_collection_script_Remove = (function(location, elem) {
  return new ScalaJS.c.scala_collection_script_Remove().init___Lscala_collection_script_Location__O(location, elem)
});
ScalaJS.c.scala_collection_script_Remove.prototype.copy$default$1__Lscala_collection_script_Location = (function() {
  return this.location__Lscala_collection_script_Location()
});
ScalaJS.c.scala_collection_script_Remove.prototype.copy$default$2__O = (function() {
  return this.elem__O()
});
ScalaJS.c.scala_collection_script_Remove.prototype.productPrefix__T = (function() {
  return "Remove"
});
ScalaJS.c.scala_collection_script_Remove.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_collection_script_Remove.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.location__Lscala_collection_script_Location();
        break
      };
    case 1:
      {
        return this.elem__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_script_Remove.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_script_Remove.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_script_Remove(x$1)
});
ScalaJS.c.scala_collection_script_Remove.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_script_Remove.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_script_Remove.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_collection_script_Remove(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Remove$1 = ScalaJS.as.scala_collection_script_Remove(x$1);
      return ((ScalaJS.anyRefEqEq(this.location__Lscala_collection_script_Location(), Remove$1.location__Lscala_collection_script_Location()) && ScalaJS.anyEqEq(this.elem__O(), Remove$1.elem__O())) && Remove$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_script_Remove.prototype.init___Lscala_collection_script_Location__O = (function(location, elem) {
  this.location$1 = location;
  this.elem$1 = elem;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_script_Remove.prototype.init___O = (function(elem) {
  ScalaJS.c.scala_collection_script_Remove.prototype.init___Lscala_collection_script_Location__O.call(this, ScalaJS.modules.scala_collection_script_NoLo(), elem);
  return this
});
ScalaJS.c.scala_collection_script_Remove.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_script_Remove.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_script_Remove.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_script_Remove.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_script_Remove.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_script_Remove.prototype.copy__Lscala_collection_script_Location__O__ = (function(location, elem) {
  return this.copy__Lscala_collection_script_Location__O__Lscala_collection_script_Remove(location, elem)
});
ScalaJS.c.scala_collection_script_Remove.prototype.elem__ = (function() {
  return this.elem__O()
});
ScalaJS.c.scala_collection_script_Remove.prototype.location__ = (function() {
  return this.location__Lscala_collection_script_Location()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Remove = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Remove.prototype = ScalaJS.c.scala_collection_script_Remove.prototype;
ScalaJS.is.scala_collection_script_Remove = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Remove)))
});
ScalaJS.as.scala_collection_script_Remove = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Remove(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Remove")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Remove = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Remove)))
});
ScalaJS.asArrayOf.scala_collection_script_Remove = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Remove(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Remove;", depth)
  }
});
ScalaJS.data.scala_collection_script_Remove = new ScalaJS.ClassTypeData({
  scala_collection_script_Remove: 0
}, false, "scala.collection.script.Remove", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Remove: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Remove.prototype.$classData = ScalaJS.data.scala_collection_script_Remove;
//@ sourceMappingURL=Remove.js.map
